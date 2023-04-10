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

function addSong(song) {
   queueCollection.insertOne(song);
}

/* TODO: how to delete a song? By ID? probably.
function deleteSong(song) {
   // Returns true if it succeeded, false otherwise
   // TODO: Need more info than song title
   return queueCollection.deleteOne( { songTitle: song.songTitle, _id: song.queueId } ); 
}
*/

function getQueue(queueId) {
   return queueCollection.find({ _id: queueId }).toArray();
}

function deleteQueue(queueId) {
   return queueCollection.deleteOne( { _id: queueId });
}

module.exports = {
   getUser,
   getUserByAuthToken,
   registerUser,
   addSong,
   getQueue,
   deleteQueue
}