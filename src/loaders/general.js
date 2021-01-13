import { json, urlencoded } from 'body-parser';
import { static as expressStatic } from 'express';
import { resolve } from 'path';

module.exports = (server) => {
  server.app.use(json());
  server.app.use(urlencoded({ extended: false }));

  server.app.use('/', expressStatic(resolve(__dirname, '../../public')));

  return server;
};
