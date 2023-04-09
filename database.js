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

async function registerUser(user) {
    // TODO
}

function addSong(song) {
    // TODO
}