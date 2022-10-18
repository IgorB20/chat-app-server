import { httpServer } from "./src/app.js";

const PORT = 8080;


httpServer.listen(PORT, ()=>{
    console.log(`Server listen on port -> ${PORT}`)
});