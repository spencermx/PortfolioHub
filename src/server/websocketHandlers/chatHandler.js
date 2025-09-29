// server/websocketHandlers/chatHandler.js
const WebSocket = require('ws');

class ChatHandler {
  constructor() {
    this.clients = new Map();
    // Bind methods to the instance
    this.onConnection = this.onConnection.bind(this);
  }

  onConnection(ws) {
    const clientId = Date.now();
    this.clients.set(clientId, { ws, interval: null });
    console.log(`Chat client connected: ${clientId}`);

    // Start sending time updates every 5 seconds
    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        const currentTime = new Date().toLocaleTimeString();
        const timeMessage = JSON.stringify({ type: 'time', data: currentTime });
        ws.send(timeMessage);
      }
    }, 5000);

    // Store the interval so we can clear it later
    this.clients.get(clientId).interval = interval;

    ws.on('message', (message) => this.onMessage(clientId, message));
    ws.on('close', () => this.onClose(clientId));
  }

  onMessage(clientId, message) {
    console.log(`Chat message from ${clientId}: ${message}`);
    // Broadcast the message to all other clients
    for (const [id, clientObj] of this.clients.entries()) {
      if (clientObj.ws.readyState === WebSocket.OPEN && id !== clientId) {
        const chatMessage = JSON.stringify({
          type: 'chat',
          data: `User ${clientId}: ${message}`,
        });
        clientObj.ws.send(chatMessage);
      }
    }
  }

  onClose(clientId) {
    console.log(`Chat client disconnected: ${clientId}`);
    // Clear the interval timer
    clearInterval(this.clients.get(clientId).interval);
    this.clients.delete(clientId);
  }
}

module.exports = ChatHandler;
