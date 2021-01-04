const io = require("socket.io");

let socket;

module.exports = {
    socket:  async (server) => {
        socket = await io(server.http);
        return server
    },
    getSocket: () => socket
}