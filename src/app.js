import { createServer } from 'http';
import { Server } from "socket.io";

const httpServer = createServer();

const messages = [];


const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log("Alguém conectou!");

    socket.on("message", (msg)=>{
        console.log("Nova mensagem! -->", msg)
        messages.push({...msg, createdAt: new Date()})
        io.emit("message", {...msg, createdAt: new Date()});
    })
});

export { httpServer }
