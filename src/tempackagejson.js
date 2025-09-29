  // "scripts": {
  //   "dev": "next dev",
  //   "build": "next build",
  //   "start": "next start",
  //   "lint": "next lint"
  // },

// server.js
const next = require("next");
const http = require("http");

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
  const server = http.createServer((req, res) => {
    // Log every request
    console.log([${new Date().toISOString()}] ${req.method} ${req.url});

    // Custom routing example
    if (req.url === "/api/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "ok", timestamp: new Date() }));
    }

    // Create WebSocket server without attaching it to the HTTP server
    const wss = new WebSocket.Server({ noServer: true });

    // Handle WebSocket connection
    wss.on("connection", (ws) => {
      console.log("A client connected");
      ws.send("Welcome to the server!");
    });

    // Handle upgrade requests manually
    server.on("upgrade", (request, socket, head) => {
      // Get pathname directly from request.url
      const pathname = request.url;

      if (pathname === "/ws/chat") {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit("connection", ws, request);
        });
      } else {
        // Let Next.js handle its own WebSocket connections
        socket.destroy();
      }
    });

    return handleNextRequests(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("=====================================");
    console.log(Server running on port ${PORT});
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




Command: oryx build /tmp/zipdeploy/extracted -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log  -i /tmp/8dcfb86f64d901e -p compress_node_modules=tar-gz | tee /tmp/oryx-build.log
Operation performed by Microsoft Oryx, https://github.com/Microsoft/Oryx
You can report issues at https://github.com/Microsoft/Oryx/issues

Oryx Version: 0.2.20240424.1, Commit: d37b2225a252ab2c04b4726024d047cf01ea1318, ReleaseTagName: 20240424.1

Build Operation ID: aa83961dfebd0033
Repository Commit : c6c95796-105f-4059-9b28-3828250ad847
OS Type           : bookworm
Image Type        : githubactions

Detecting platforms...
/bin/bash: line 1:   123 Killed                  oryx build /tmp/zipdeploy/extracted -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log -i /tmp/8dcfb86f64d901e -p compress_node_modules=tar-gz
       124                       | tee /tmp/oryx-build.log
/bin/bash: line 1:   123 Killed                  oryx build /tmp/zipdeploy/extracted -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log -i /tmp/8dcfb86f64d901e -p compress_node_modules=tar-gz\n       124                       | tee /tmp/oryx-build.log\n/bin/bash -c "oryx build /tmp/zipdeploy/extracted -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log  -i /tmp/8dcfb86f64d901e -p compress_node_modules=tar-gz | tee /tmp/oryx-build.log ; exit $PIPESTATUS "
