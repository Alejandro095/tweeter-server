import setEnviromentVariables from 'config/env';

import { Pool as PG } from 'pg';

setEnviromentVariables();

const Pool = new PG({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

async function postgre(server) {
  await Pool.connect();
  return server;
}

export {
  postgre,
  Pool,
};
