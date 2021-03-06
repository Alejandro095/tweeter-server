import morgan from 'morgan';

module.exports = (server) => {
  if (process.env.NODE_ENV === 'development') {
    server.app.use(morgan('dev'));
  } else {
    server.app.use(morgan('tiny'));
  }

  return server;
};
