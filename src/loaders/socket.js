import io from "socket.io";

let socket;

module.exports = {
    socket:  async (server) => {
        socket = await io(server.http);
        
        socket.on("connect", client => {
            console.log("::Nuevo cliente ", client.id); 
        })

        return server
    },
    getSocket: () => socket
}