import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { ctfLevelRouter } from "./routes/levels.routes";
import { cornRouter } from "./routes/corn.routes";

const app = express();

const corsOptions = {
  origin: [
    "https://68b52d817223a6961129e6ba--dockshell.netlify.app",
    "https://dockshell.netlify.app",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: "*",
  credentials: true,
};
app.use("/api/v1/corn", cornRouter);
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/ctf", ctfLevelRouter);

export { app };
