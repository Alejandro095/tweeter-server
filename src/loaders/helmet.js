import helmet from 'helmet';

module.exports = (server) => server.app.use(helmet());
