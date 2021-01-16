import cors from './cors';
import helmet from './helmet';
import morgan from './morgan';
import route from './route';
import general from './general';
import { Sockets } from './socket';
import { postgre } from './postgresql';
import cookies from './cookies';
import compression from './compression';

export {
  cors, helmet, morgan, Sockets, route, postgre, general, cookies, compression,
};
