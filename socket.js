import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"], // Add custom headers if necessary
    credentials: true, // Allow credentials if needed
  },
});

io.on("connection", () => {
  console.log("connected successfully");
});

server.listen(3000, console.log("listening on port 3000"));
