const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const username = process.env.MONGOUSER_STARTUP;
const password = process.env.MONGOPASSWORD_STARTUP;
const hostName = process.env.MONGOHOSTNAME_STARTUP;

console.log(username);

if (!username) {
   throw Error("Database not configured. Set environment variables")

}

const url = `mongodb+srv://${username}:${password}@${hostName}`;

const client = new MongoClient(url);
const userCollection = client.db("ourqueue").collection("user");
const queueCollection = client.db("ourqueue").collection("queue");
const queueAuthorizationsCollection = client.db("ourqueue").collection("queueAuthorizations");

async function getUser(username) {
   return await userCollection.findOne({ username: username });
}

async function getUserByAuthToken(authToken) {
   return await userCollection.findOne({ token: authToken });
}

async function registerUser(username, password) {
   // Hash password before inserting
   const passwordHash = await bcrypt.hash(password, 10);

   const user = {
      username: username,
      password: passwordHash,
      token: uuid.v4(),
   };
   await userCollection.insertOne(user);

   return user;
}

async function addSong(songTitle, artistName, queueOwner) {
   const song = {
      _id: uuid.v4(),
      queueOwner: queueOwner,
      songTitle: songTitle,
      artistName: artistName,
   }

   await queueCollection.insertOne(song);
   return song._id;
}

/* TODO: how to delete a song? By ID? probably.
function deleteSong(song) {
   // Returns true if it succeeded, false otherwise
   // TODO: Need more info than song title
   return queueCollection.deleteOne( { songTitle: song.songTitle, _id: song.queueOwner } ); 
}
*/

function getQueue(queueOwner) {
   return queueCollection.find({ queueOwner: queueOwner }).toArray();
}

function clearQueue(queueOwner) {
   return queueCollection.deleteMany({ queueOwner: queueOwner });
}

function addQueueAuthorization(username, queueOwner) {
   const query = { username: username, queueOwner: queueOwner };
   const update = { $set: { username: username, queueOwner: queueOwner } };
   const options = { upsert: true };
   queueAuthorizationsCollection.updateOne(query, update, options);
}

function removeQueueAuthorization(username, queueOwner) {
   return queueAuthorizationsCollection.deleteMany({ username: username, queueOwner: queueOwner });
}

async function checkQueueAuthorization(username, queueOwner) {
   return await queueAuthorizationsCollection.findOne({ username: username, queueOwner: queueOwner });
}

async function getListOfAuthorizedUsers(queueOwner) {
   return await queueAuthorizationsCollection.find({ queueOwner: queueOwner }).toArray();
}

module.exports = {
   getUser,
   getUserByAuthToken,
   registerUser,
   addSong,
   getQueue,
   clearQueue,
   addQueueAuthorization,
   removeQueueAuthorization,
   checkQueueAuthorization,
   getListOfAuthorizedUsers
}