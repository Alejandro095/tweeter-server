import setEnviromentVariables from './config/env';
import Prepare from './config/express';
import {
  cors, helmet, morgan, Sockets, route, PostgresqlLoader, general,
} from './loaders';

setEnviromentVariables();

Prepare([cors, helmet, morgan, general, route, PostgresqlLoader, Sockets])
  .then((http) => http.listen(process.env.PORT || 80))
  .then(() => console.log('Server is ready!', process.env.PORT))
  .catch(console.log);
