import compression from 'compression';

module.exports = (server) => server.app.use(compression({ level: 7 }));
