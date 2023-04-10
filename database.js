const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const username = process.env.MONGOUSER_STARTUP;
const password = process.env.MONGOPASSWORD_STARTUP;
const hostName = MONGOHOSTNAME_STARTUP;

if (!username) {
   throw Error("Database not configured. Set environment variables")

}

const url = `mongodb+srv://${username}:${password}@${hostName}`;

const client = new MongoClient(url);
const userCollection = client.db("ourqueue").collection("user");
const queueCollection = client.db("ourqueue").collection("queue");
const queueAuthorizationsCollection = client.db("ourqueue").collection("queueAuthorizations");

function getUser(username) {
   return userCollection.findOne({ username: username });
}

function getUserByAuthToken(authToken) {
   return userCollection.findOne({ authToken: authToken });
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

function addSong(songTitle, artistName, queueOwnerId) {
   const song = {
      _id: uuid.v4(),
      queueOwnerId: queueOwnerId,
      songTitle: songTitle,
      artistName: artistName,
   }
   
   queueCollection.insertOne(song);
   return song._id;
}

/* TODO: how to delete a song? By ID? probably.
function deleteSong(song) {
   // Returns true if it succeeded, false otherwise
   // TODO: Need more info than song title
   return queueCollection.deleteOne( { songTitle: song.songTitle, _id: song.queueId } ); 
}
*/

function getQueue(queueId) {
   return queueCollection.find({ queueId: queueId }).toArray();
}

function deleteQueue(queueId) {
   if (queueCollection.deleteMany( { queueId: queueId })) {
      queueAuthorizationsCollection.deleteMany({ queueId: queueId });
   } else {
      return false;
   }
}

function addQueueAuthorization(userId, queueId) {
   queueAuthorizationsCollection.insertOne({ userId: userId, queueId: queueId});
}

function checkQueueAuthorization(userId, queueId) {
   return queueAuthorizationsCollection.findOne( { userId: userId, queueId: queueId });
}

module.exports = {
   getUser,
   getUserByAuthToken,
   registerUser,
   addSong,
   getQueue,
   deleteQueue,
   addQueueAuthorization,
   checkQueueAuthorization
}