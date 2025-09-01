import { Client, type ConnectConfig } from "ssh2";
import { WebSocket } from "ws";

export class SSHHandler {
  private ws: WebSocket;
  private sshClient: Client | null = null;
  private sshStream: any = null;
  private isSSHConnected: boolean = false;

  constructor(ws: WebSocket) {
    this.ws = ws;
  }

  private setupSSHListeners(sshClient: Client): void {
    sshClient.on("ready", () => {
      this.isSSHConnected = true;

      sshClient.shell((err, stream) => {
        if (err) {
          console.error("Shell error:", err);
          this.ws.send(`\r\nSSH Shell error: ${err.message}\r\n`);
          this.ws.send("user@macbook ~ % ");
          this.isSSHConnected = false;
          return;
        }

        // console.log("SSH shell opened");
        this.sshStream = stream;

        stream.on("data", (data: Buffer) => {
          this.ws.send(data.toString());
        });

        stream.on("close", () => {
          console.log("SSH stream closed");
          this.sshStream = null;
          this.isSSHConnected = false;
          this.ws.send("\r\nSSH connection closed.\r\n");
          this.ws.send("user@macbook ~ % ");
        });

        stream.on("error", (err: Error) => {
          console.error("SSH stream error:", err);
          this.sshStream = null;
          this.isSSHConnected = false;
          this.ws.send(`\r\nSSH Stream error: ${err.message}\r\n`);
          this.ws.send("user@macbook ~ % ");
        });
      });
    });

    sshClient.on("close", () => {
      console.log("SSH client disconnected");
      this.isSSHConnected = false;
      this.sshStream = null;
      this.sshClient = null;
      this.ws.send("\r\nSSH connection closed.\r\n");
      this.ws.send("user@macbook ~ % ");
    });

    sshClient.on("error", (err) => {
      console.error("SSH connection error:", err);
      this.isSSHConnected = false;
      this.sshStream = null;
      this.sshClient = null;
      this.ws.send(`\r\nSSH connection failed: ${err.message}\r\n`);
      this.ws.send("user@macbook ~ % ");
    });
  }

  public connect(config: ConnectConfig): void {
    console.log("Attempting SSH connection with config:", {
      ...config,
      password: "[HIDDEN]",
    });

    if (this.sshClient) {
      console.log("Closing existing SSH connection");
      this.sshClient.end();
    }

    // Create new client
    this.sshClient = new Client();
    this.setupSSHListeners(this.sshClient);

    try {
      this.sshClient.connect({
        ...config,
        readyTimeout: 20000, // 20 second timeout
        algorithms: {
          kex: [
            "diffie-hellman-group14-sha256",
            "diffie-hellman-group16-sha512",
            "diffie-hellman-group18-sha512",
            "ecdh-sha2-nistp256",
            "ecdh-sha2-nistp384",
            "ecdh-sha2-nistp521",
          ],
          cipher: [
            "aes128-ctr",
            "aes192-ctr",
            "aes256-ctr",
            "aes128-gcm",
            "aes256-gcm",
          ],
          hmac: ["hmac-sha2-256", "hmac-sha2-512", "hmac-sha1"],
        },
      });
    } catch (error) {
      console.error("SSH connect error:", error);
      this.ws.send(
        `\r\nSSH connection failed: ${(error as Error).message}\r\n`
      );
      this.ws.send("user@macbook ~ % ");
    }
  }

  public write(data: string): void {
    // If we have an active SSH connection, write to it
    if (this.sshStream && this.isSSHConnected) {
      this.sshStream.write(data);
    }
    // If not in SSH, the WebSocketManager will handle local terminal simulation
  }

  public close(): void {
    console.log("Closing SSH handler");

    if (this.sshStream) {
      this.sshStream.end();
      this.sshStream = null;
    }

    if (this.sshClient) {
      this.sshClient.end();
      this.sshClient = null;
    }

    this.isSSHConnected = false;
  }

  public isConnected(): boolean {
    return this.isSSHConnected;
  }
}
