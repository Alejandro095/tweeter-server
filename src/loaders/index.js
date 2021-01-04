const cors = require("./cors");
const helmet = require("./helmet");
const morgan = require("./morgan");

const route = require("./route");

const { socket } = require("./socket");
const { postgresql } =require("./postgresql")

module.exports = {cors, helmet , morgan, socket, route, postgresql}