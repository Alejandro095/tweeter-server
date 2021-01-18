import setEnviromentVariables from './config/env';
import Prepare from './config/express';
import loaders from './loaders';

setEnviromentVariables();

Prepare(loaders())
  .then((http) => http.listen(process.env.PORT || 80))
  .then(() => console.log('Server is ready! ', process.env.PORT))
  .catch(console.log);
