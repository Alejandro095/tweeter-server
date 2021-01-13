import setEnviromentVariables from 'config/env';

import { Pool as PoolPG } from 'pg';

setEnviromentVariables();

const Pool = new PoolPG({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

function PostgresqlLoader(server) {
  return server;
}

export {
  PostgresqlLoader,
  Pool,
};
