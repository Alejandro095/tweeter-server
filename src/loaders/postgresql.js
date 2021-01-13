import setEnviromentVariables from "./../config/env";
setEnviromentVariables();

import { Pool } from "pg";

const database = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    ssl: process.env.NODE_ENV == "production" ? { rejectUnauthorized: false } : undefined
});

module.exports = {
    postgresql: server => server,
    Pool: database
};
