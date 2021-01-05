const socket = io();

setInterval(() => socket.emit("alive", "hey!"), 500)
