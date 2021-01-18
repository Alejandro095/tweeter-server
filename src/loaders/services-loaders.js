import setEnviromentVariables from 'config/env';
import { Pool as PG } from 'pg';
import io from 'socket.io';

setEnviromentVariables();

const Pool = new PG({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

let Socket;

async function ServicesLoaders(server) {
  // Connection to PostgreSQL
  await Pool.connect();

  // Socket io server
  Socket = await io(server.http);

  Socket.on('connect', (client) => {
    console.log('::Nuevo cliente ', client.id);
  });

  return server;
}

const pool = () => Pool;
const socket = () => Socket;

export {
  ServicesLoaders,
  pool,
  socket,
};
