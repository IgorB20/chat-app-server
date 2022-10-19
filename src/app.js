import { createServer } from 'http';
import { Server } from "socket.io";

const httpServer = createServer();

let messages = [];


const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Alguém conectou!");

    socket.on("message", (msg)=>{
        console.log("Nova mensagem! -->", msg)
        messages.push({...msg, createdAt: new Date(), readed: false})
        io.emit("message", messages);
    })

    socket.on("read", (msg)=>{
        // messages.push({...msg, createdAt: new Date(), readed: false})
        messages = messages.map(msg => ({...msg, readed: true}));
        io.emit("message", messages);
    })
});

export { httpServer }
