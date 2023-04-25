const { WebSocketServer } = require('ws');
const uuid = require('uuid');
const db = require("./database.js");
const { signedCookie } = require('cookie-parser');

async function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  function sendEvent(usernames, currQueueOwner, data) {
    for (let connection of connections) {
      if (connection.queueOwner === currQueueOwner && usernames.includes(connection.username)) {
        connection.ws.send(JSON.stringify(data)); 
      }
    }
  }
  peerProxy.sendEvent = sendEvent;

  wss.on('connection', async (ws, req) => {
    let queueOwner = req.url.substring(1);

    let authToken = parseCookieHeader(req?.headers?.cookie)["token"];
    let user = await db.getUserByAuthToken(authToken);


    const connection = { id: uuid.v4(), username: user.username, queueOwner: queueOwner, alive: true, ws: ws };
    connections.push(connection);

    ws.on('message', function message(data) {
      const messageData = JSON.parse(data);
      if (messageData.eventType === "message") {
        connections.forEach((c) => {
          if (c.username !== undefined && c.queueOwner !== undefined) {
            if (c.id !== connection.id && c.queueOwner === connection.queueOwner) {
              messageData.username = connection.username;
              c.ws.send(JSON.stringify(messageData));
            }
          }
        });
      }
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', () => {
      connections.findIndex((o, i) => {
        if (o.id === connection.id) {
          connections.splice(i, 1);
          return true;
        }
      });
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);

  function parseCookieHeader(header) {
    if (header === "") {
      return;
    }

    let pairs = header.split(";");

    let splittedPairs = pairs.map(cookie => cookie.split("="));
    const cookieObj = splittedPairs.reduce(function (obj, cookie) {
      obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim());
      return obj;
    }, {})

    return cookieObj;
  }
}

module.exports = { peerProxy };
