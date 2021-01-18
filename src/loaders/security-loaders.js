import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

export default function SecurityLoaders(server) {
  // CORS
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  server.app.use(cors(options));

  // Helmet
  server.app.use(helmet());

  // Morgan
  if (process.env.NODE_ENV === 'development') {
    server.app.use(morgan('dev'));
  } else {
    server.app.use(morgan('tiny'));
  }

  return server;
}
