import { json, urlencoded } from 'body-parser';
import { static as expressStatic } from 'express';

module.exports = (server) => {
  server.app.use(json());
  server.app.use(urlencoded({ extended: false }));

  server.app.use('/', expressStatic(`${__dirname}../public`));

  return server;
};
