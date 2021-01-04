const { Pool } = require("pg");

const database = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "tweeter"
});

module.exports = {
    postgresql: server => server,
    Pool: database
};
