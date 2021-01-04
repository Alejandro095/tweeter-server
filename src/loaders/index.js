const cors = require("./cors");
const helmet = require("./helmet");
const morgan = require("./morgan");

const {socket} = require("./socket");
const route = require("./route");

module.exports = {cors,helmet,morgan, socket, route}