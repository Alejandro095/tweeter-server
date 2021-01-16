import setEnviromentVariables from './config/env';
import Prepare from './config/express';
import {
  cors, helmet, morgan, Sockets, route, postgre, general, cookies, compression,
} from './loaders';

setEnviromentVariables();

Prepare([cors, compression, cookies, helmet, morgan, general, route, postgre, Sockets])
  .then((http) => http.listen(process.env.PORT || 80))
  .then(() => console.log('Server is ready!', process.env.PORT))
  .catch(console.log);
