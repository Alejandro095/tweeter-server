import { PREFIX, ROUTES } from 'routes/index';
import { json, urlencoded } from 'body-parser';
import { static as expressStatic } from 'express';
import { resolve } from 'path';
import cookieParser from 'cookie-parser';
import compression from 'compression';

export default function GeneralLoader(server) {
  // Body
  server.app.use(json());
  server.app.use(urlencoded({ extended: false }));

  // Compression
  server.app.use(compression({ level: 7 }));

  // Static files
  server.app.use('/', expressStatic(resolve(__dirname, '../../public')));

  // Routes
  const getPath = (path, prefix) => (prefix ? `${PREFIX}${path}` : path);

  ROUTES.forEach(({
    path, type, controller, middlewares, prefix = true,
  }) => {
    if (middlewares) {
      server.app[type](getPath(path, prefix), middlewares, controller);
    } else {
      server.app[type](getPath(path, prefix), controller);
    }
  });

  //   Cookies
  server.app.use(cookieParser());

  return server;
}
