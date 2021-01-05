const { Pool } = require("pg");

const database = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

module.exports = {
    postgresql: server => server,
    Pool: database
};
