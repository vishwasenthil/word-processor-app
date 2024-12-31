import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import "dotenv/config.js"

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log("Connection");
});

const port = 5000;
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});