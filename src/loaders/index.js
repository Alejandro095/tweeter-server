const cors = require("./cors");
const helmet = require("./helmet");
const morgan = require("./morgan");

const {socket} = require("./socket")

module.exports = {cors,helmet,morgan, socket}