const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const express = require('express');
const app = express();
const db = require("./database.js");

const authCookieName = "token";

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create authToken for new user
apiRouter.post("/auth/create", async (req, res) => {
   if (await db.getUser(req.body.username)) {
      res.status(409).send({ msg: "Existing user" });
   } else {
      const user = await db.registerUser(req.body.username, req.body.password);

      setAuthCookie(res, user.token);

      // Sends the HTTP response with the body containing the user ID
      res.send({
         id: user._id,
      });
   }
});

// Get authToken for the provided login credentials
apiRouter.post("/auth/login", async (req, res) => {
   const user = await db.getUser(req.body.username);
   if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
         setAuthCookie(res, user.token);
         res.send({ id: user._id });
         return;
      }
   }
   res.status(401).send({ msg: "Unauthorized" });
});

// Delete authToken if it's stored in the cookie
apiRouter.delete("/auth/logout", (_req, res) => {
   res.clearCookie(authCookieName);
   res.status(204).end();
});

// Get user information, including username and auth status 
apiRouter.get("/user/:username", async (req, res) => {
   const user = await db.getUser(req.params.username);
   if (user) {
      const token = req?.cookies.token;
      res.send({ username: user.username, authenticated: token === user.token });
      return;
   }
   res.status(404).send({ msg: "Unknown" });
});

// queueSecurityRouter verifies credentials for queue endpoints where authentication is needed
var queueSecurityRouter = express.Router();
apiRouter.use(queueSecurityRouter);
queueSecurityRouter.use(`/queue/:queueOwner`)

// Authentication middleware for queues
queueSecurityRouter.use(async (req, res, next) => {
   authToken = req.cookies[authCookieName];
   const user = await db.getUserByAuthToken(authToken);
   const queue = await db.getQueue(req.params.queueOwner);
   if (db.checkQueueAuthorization(user._id, queue._id)) {
      next();
   } else {
      res.status(401).send({ msg: "Unauthorized" });
   }
});

// Get queue by ID
queueSecurityRouter.get("/", async (req, res) => {
   const queue = await db.getQueue(req.params.queueOwner);
   res.send(queue);
});

// Delete queue by ID
queueSecurityRouter.delete("/deleteQueue", async (req, res) => {
   if (db.deleteQueue(req.params.queueOwner)) {
      res.status(200).send();
   } else {
      res.status(404).send({ msg: "Could not find a queue with that ID" });
   }
});

// Add song to a queue
queueSecurityRouter.post("/addSong", async (req, res) => {
   const songId = await db.addSong(req.body.songTitle, req.body.artistName, req.body.userId);
   res.status(204).send({ songId: songId });
});

// TODO: Delete song from queue 

// Sets the cookie in the HTTP response
function setAuthCookie(res, authToken) {
   res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: "strict:",
   });
}