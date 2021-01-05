const { json } = require("body-parser");
const { static } = require("express");

module.exports = (server) => {
    server.app.use(json())
    server.app.use("/", static(__dirname + "./../../public"));
    return server;
};


