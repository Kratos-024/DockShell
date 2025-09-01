import { WebSocketServer, WebSocket } from "ws";
import http from "http";
import { SSHHandler } from "./SSH";
import { StreamingChatHandler } from "./OpenRouter";

export class WebSocketManager {
  private wss: WebSocketServer;

  constructor(server: http.Server, private openaiApiKey: string) {
    if (!openaiApiKey) {
      throw new Error("OpenAI API key must be provided to WebSocketManager.");
    }
    this.wss = new WebSocketServer({ server });
    this.setupConnectionHandling();
  }

  private setupConnectionHandling(): void {
    this.wss.on("connection", (ws: WebSocket) => {
      console.log("Client connected. Initializing handlers.");

      const sshHandler = new SSHHandler(ws);
      const chatHandler = new StreamingChatHandler(ws, this.openaiApiKey);

      // Track current input buffer and session state
      let currentInput = "";
      let commandHistory: string[] = [];
      let historyIndex = -1;
      let passwordMode = false;
      let passwordBuffer = "";
      let pendingSshConfig: any = null;

      const MAX_HISTORY = 10; // Store maximum 10 commands

      const replaceCurrentLine = (newText: string) => {
        ws.send("\r\x1B[K");
        if (!sshHandler.isConnected()) {
          ws.send("user@macbook ~ % ");
        }
        ws.send(newText);
        currentInput = newText;
      };

      const parseSSHCommand = (command: string) => {
        const parts = command.trim().split(/\s+/);
        if (parts[0] !== "ssh") throw new Error("Not a valid SSH command");

        let username = "";
        let host = "";
        let port = 22;

        if (parts[1] && parts[1].includes("@")) {
          const [user, hostname] = parts[1].split("@");
          //@ts-ignore
          username = user;
          //@ts-ignore
          host = hostname;
        } else if (parts[1]) {
          host = parts[1];
        }

        const pIndex = parts.indexOf("-p");
        if (pIndex !== -1 && parts[pIndex + 1]) {
          //@ts-ignore
          port = parseInt(parts[pIndex + 1], 10);
        }

        return { host, port, username };
      };

      const handleLocalCommand = (command: string) => {
        ws.send("\r\n");

        if (command.startsWith("ssh ")) {
          try {
            const sshConfig = parseSSHCommand(command);
            console.log("Parsed SSH config:", sshConfig);

            if (!sshConfig.host) {
              ws.send("ssh: missing hostname\r\n");
              ws.send("user@macbook ~ % ");
              return;
            }

            ws.send(
              `Connecting to ${
                sshConfig.username ? sshConfig.username + "@" : ""
              }${sshConfig.host}...\r\n`
            );
            ws.send(
              `${sshConfig.username || "user"}@${sshConfig.host}'s password: `
            );
            passwordMode = true;
            passwordBuffer = "";
            pendingSshConfig = sshConfig;
          } catch (error) {
            ws.send(`ssh: ${(error as Error).message}\r\n`);
            ws.send("user@macbook ~ % ");
          }
        } else if (command === "clear") {
          ws.send("\x1B[2J\x1B[H");
          ws.send("user@macbook ~ % ");
        } else if (command === "exit") {
          ws.send("logout\r\n");
          ws.send("user@macbook ~ % ");
        } else {
          ws.send(`zsh: command not found: ${command}\r\n`);
          ws.send("user@macbook ~ % ");
        }
      };

      const handleEnterKey = () => {
        const command = currentInput.trim();

        // Add non-empty commands to history
        if (command && command !== "") {
          // Remove duplicate if it's the same as the last command
          if (
            commandHistory.length === 0 ||
            commandHistory[commandHistory.length - 1] !== command
          ) {
            commandHistory.push(command);

            // Keep only the last MAX_HISTORY commands
            if (commandHistory.length > MAX_HISTORY) {
              commandHistory = commandHistory.slice(-MAX_HISTORY);
            }
          }

          // Reset history index to point to "after last command"
          historyIndex = commandHistory.length;
        }

        if (sshHandler.isConnected()) {
          sshHandler.write(command + "\r");
        } else {
          handleLocalCommand(command);
        }

        currentInput = "";
      };

      const handleBackspace = () => {
        if (currentInput.length > 0) {
          currentInput = currentInput.slice(0, -1);
          ws.send("\b \b");
        }
      };

      const handleUpArrow = () => {
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          const command = commandHistory[historyIndex];
          //@ts-ignore

          replaceCurrentLine(command);
          console.log(
            `History UP: index=${historyIndex}, command="${command}"`
          );
        }
      };

      const handleDownArrow = () => {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          const command = commandHistory[historyIndex];
          //@ts-ignore

          replaceCurrentLine(command);
          console.log(
            `History DOWN: index=${historyIndex}, command="${command}"`
          );
        } else if (historyIndex === commandHistory.length - 1) {
          // Go to "after last command" - empty line
          historyIndex++;
          replaceCurrentLine("");
          console.log(`History DOWN: cleared line, index=${historyIndex}`);
        }
      };

      const handlePasswordInput = (char: string) => {
        if (char === "\r") {
          ws.send("\r\n");
          passwordMode = false;

          const fullConfig = {
            ...pendingSshConfig,
            password: passwordBuffer,
          };

          console.log("Attempting SSH connection with config:", {
            ...fullConfig,
            password: "*".repeat(passwordBuffer.length), // Show asterisks matching password length
          });
          sshHandler.connect(fullConfig);

          passwordBuffer = "";
          pendingSshConfig = null;
          return;
        }

        // Handle backspace in password mode
        if (char === "\u007F") {
          if (passwordBuffer.length > 0) {
            passwordBuffer = passwordBuffer.slice(0, -1);
            ws.send("\b \b");
          }
          return;
        }

        // Handle Ctrl+V paste in password mode
        if (char === "\u0016") {
          // Note: Paste in terminal is usually handled by the terminal emulator
          // The actual paste content will come as subsequent characters
          return;
        }

        // Handle regular characters and pasted content
        if (char.length > 1) {
          // This is likely pasted content
          passwordBuffer += char;
          ws.send("*".repeat(char.length));
        } else if (char >= " " && char <= "~") {
          passwordBuffer += char;
          ws.send("*");
        }
      };

      const handleKeystroke = (data: string) => {
        console.log("Keystroke received:", data.charCodeAt(0), data);

        if (passwordMode) {
          handlePasswordInput(data);
          return;
        }

        if (sshHandler.isConnected()) {
          sshHandler.write(data);
          return;
        }

        // Handle paste in normal mode
        if (data.length > 1) {
          currentInput += data;
          ws.send(data);
          return;
        }

        switch (data) {
          case "\r": // Enter key
            handleEnterKey();
            break;
          case "\u007F": // Backspace
            handleBackspace();
            break;
          case "\u001b[A": // Up arrow
            handleUpArrow();
            break;
          case "\u001b[B": // Down arrow
            handleDownArrow();
            break;
          case "\u0003": // Ctrl+C
            ws.send("^C\r\n");
            if (!sshHandler.isConnected()) {
              ws.send("user@macbook ~ % ");
            }
            currentInput = "";
            historyIndex = commandHistory.length; // Reset history position
            break;
          case "\u0016": // Ctrl+V (paste)
            // Paste is usually handled by the terminal emulator automatically
            // The pasted content will come as the next data chunk
            break;
          case "\u001b[D": // Left arrow
          case "\u001b[C": // Right arrow
            // Ignore cursor movement for now
            break;
          default:
            if (data >= " " && data <= "~") {
              currentInput += data;
              ws.send(data);
            }
            break;
        }
      };

      ws.on("message", async (message) => {
        const msg = message.toString();

        try {
          const parsed = JSON.parse(msg);
          console.log("Received message type:", parsed.type);
          console.log("Received message:", parsed);

          switch (parsed.type) {
            case "connect-ssh":
              console.log("Processing SSH connection request");
              sshHandler.connect(parsed.data);
              break;
            case "chat":
              await chatHandler.streamChat(parsed.data);
              break;
            case "keystroke":
              handleKeystroke(parsed.data);
              break;
            default:
              console.log("Unknown message type:", parsed.type);
          }
        } catch (e) {
          // If it's not JSON and we're in SSH, treat it as raw SSH data
          if (sshHandler.isConnected()) {
            console.log("Raw SSH data received");
            sshHandler.write(msg);
          } else {
            console.log("Ignoring non-JSON data when not in SSH session");
          }
        }
      });

      ws.on("close", () => {
        console.log("Client disconnected. Cleaning up SSH handler.");
        sshHandler.close();
      });

      ws.on("error", (err) => {
        console.error("WebSocket error:", err);
        sshHandler.close();
      });
    });

    console.log("WebSocketManager is listening for connections.");
  }
}
