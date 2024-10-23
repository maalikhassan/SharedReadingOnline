const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', ws => {
  ws.on('message', message => {
    const data = JSON.parse(message);
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

