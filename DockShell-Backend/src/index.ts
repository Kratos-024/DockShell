import http from "http";
import { app } from "./app";
import { WebSocketManager } from "./utility/Websocket";

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) {
  console.error("FATAL: OPENROUTER_API_KEY environment variable is not set.");
  process.exit(1);
}

new WebSocketManager(server, OPENROUTER_API_KEY);

server.listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}`);
  console.log(`WebSocket server initialized and running on the same port.`);
});
