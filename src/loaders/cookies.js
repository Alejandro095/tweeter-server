import cookieParser from 'cookie-parser';
import setEnviromentVariables from 'config/env';

setEnviromentVariables();

module.exports = (server) => server.app.use(cookieParser(process.env.PRIVATE_KEY));
