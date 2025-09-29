// server.js
const next = require("next");
const http = require("http");
const WebSocket = require("ws"); // Ensure you require 'ws' module

const ChatHandler = require("./server/websocketHandlers/chatHandler");
const { warn } = require("console");
// const ChessHandler = require('./server/websocketHandlers/chessHandler');
// const MultiplayerGameHandler = require('./server/websocketHandlers/multiplayerGameHandler');

// Add startup logging
console.log("=====================================");
console.log("Server Starting");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("Current Directory:", process.cwd());
console.log("Directory Contents:", require("fs").readdirSync("."));
console.log("=====================================");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handleNextRequests = app.getRequestHandler();

app.prepare().then(() => {
  // Create the HTTP server
  const server = http.createServer((req, res) => {
    // Log every request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Custom routing example
    if (req.url === "/api/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "ok", timestamp: new Date() }));
    }

    return handleNextRequests(req, res);
  });

  // Create WebSocket servers for each functionality
  const chatWSS = new WebSocket.Server({ noServer: true });
  // const chessWSS = new WebSocket.Server({ noServer: true });
  // const gameWSS = new WebSocket.Server({ noServer: true });

  // Initialize handlers
  const chatHandler = new ChatHandler();
  // const chessHandler = new ChessHandler();
  // const multiplayerGameHandler = new MultiplayerGameHandler();

  // Bind 'connection' events
  chatWSS.on("connection", chatHandler.onConnection);
  // chessWSS.on("connection", chessHandler.onConnection);
  // gameWSS.on("connection", multiplayerGameHandler.onConnection);

  // Handle upgrade requests
  server.on("upgrade", (request, socket, head) => {
    const pathname = new URL(request.url, `http://${request.headers.host}`)
      .pathname;

    if (pathname === "/ws/chat") {
      chatWSS.handleUpgrade(request, socket, head, (ws) => {
        chatWSS.emit("connection", ws, request);
      });
    } else {
      socket.destroy();
    }

    // } else if (pathname === "/ws/chess") {
    //   chessWSS.handleUpgrade(request, socket, head, (ws) => {
    //     chessWSS.emit("connection", ws, request);
    //   });
    // } else if (pathname === "/ws/multiplayergame") {
    //   gameWSS.handleUpgrade(request, socket, head, (ws) => {
    //     gameWSS.emit("connection", ws, request);
    //   });
    // } else {
    //   socket.destroy();
    // }
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("=====================================");
    console.log(`Server running on port ${PORT}`);
    console.log("Mode:", dev ? "development" : "production");
    console.log("=====================================");
  });
});

// Add error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
});
