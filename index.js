const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const express = require('express');
const app = express();
const db = require("./database.js");
const { peerProxy } = require("./peerProxy.js");

const authCookieName = "token";
/* TODO: get around Safari localhost not storing secure cookies. For now, using Chrome to debug
const currEnvironment = process.env.NODE_ENVIRONMENT;
*/

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static("public"));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create authToken for new user
apiRouter.post("/auth/register", async (req, res) => {
   // Validate username input
   const validUsername = /^[a-zA-Z0-9]+$/.test(req.body.username);
   if (!validUsername) {
      res.status(403).send({ msg: "Invalid username. Username must contain only alphanumeric characters" });
   } else if (await db.getUser(req.body.username)) {
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
   res.status(401).send({ msg: "Invalid credentials/unauthorized" });
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
      res.send({ username: user?.username, authenticated: token === user.token });
      return;
   }
   res.status(404).send({ msg: "Unknown" });
});

// queueSecurityRouter verifies credentials for queue endpoints where authentication is needed
var queueSecurityRouter = express.Router({ mergeParams: true });
apiRouter.use(`/queue/:queueOwner`, queueSecurityRouter);

// Authentication middleware for queues
queueSecurityRouter.use(async (req, res, next) => {
   const authToken = req.cookies[authCookieName];
   const user = await db.getUserByAuthToken(authToken);
   if (user?.username === req.params.queueOwner || await db.checkQueueAuthorization(user?.username, req.params.queueOwner)) {
      const queueUsers = await db.getListOfAuthorizedUsers(req.params.queueOwner);
      let wsRecipientUsernames = queueUsers.map((user) => user.username);
      wsRecipientUsernames.push(req.params.queueOwner);
      wsRecipientUsernames = wsRecipientUsernames.filter((username) => username !== user.username);
      req.wsRecipientUsernames = wsRecipientUsernames;

      next();
   } else {
      res.status(401).send({ msg: "Unauthorized" });
   }
});

// Get queue by username
queueSecurityRouter.get("/", async (req, res) => {
   const queue = await db.getQueue(req.params.queueOwner);
   res.send(queue);
});

// Delete queue by ID
queueSecurityRouter.delete("/clearQueue", async (req, res) => {
   if (db.clearQueue(req.params.queueOwner)) {
      const webSocketData = {
         eventType: "clear"
      }

      peerProxy.sendEvent(req.wsRecipientUsernames, req.params.queueOwner, webSocketData);

      res.status(200).send();
   } else {
      res.status(404).send({ msg: "Could not find a queue with that ID" });
   }
});

// Add song to a queue
queueSecurityRouter.post("/addSong", async (req, res) => {
   const songId = await db.addSong(req.body.songTitle, req.body.artistName, req.body.queueOwner);

   const webSocketData = {
      eventType: "song",
      songTitle: req.body.songTitle,
      artistName: req.body.artistName
   }
   peerProxy.sendEvent(req.wsRecipientUsernames, req.params.queueOwner, webSocketData);

   res.status(204).send({ songId: songId });
});

// Add permission for a user to join a queue
queueSecurityRouter.post("/inviteUser/:username", (req, res) => {
   if (req.params.username !== req.params.queueOwner) {
      db.addQueueAuthorization(req.params.username, req.params.queueOwner);
   }
   res.status(204).send();
});

// Remove permission for a user to join a queue
queueSecurityRouter.delete("/uninviteUser/:username", (req, res) => {
   db.removeQueueAuthorization(req.params.username, req.params.queueOwner);
   res.status(200).send();
});

// TODO: Delete song from queue 

app.use((_req, res) => {
   res.sendFile('index.html', { root: 'public' });
});

// Sets the cookie in the HTTP response
function setAuthCookie(res, authToken) {

   res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
   });
}

const httpService = app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});

peerProxy(httpService);