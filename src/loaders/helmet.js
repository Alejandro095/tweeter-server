const helmet = require("helmet");

module.exports = (server) => server.app.use(helmet());
