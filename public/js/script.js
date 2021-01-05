const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
document.getElementById("date").innerText = hours < 12 ? `Last update today, ${hours}:${minutes} AM` : `Last update today, ${hours - 12}:${minutes} PM`


const socket = io();

setInterval(() => socket.emit("alive", "hey!"), 500)
