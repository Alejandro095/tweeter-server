import cors from './cors';
import helmet from './helmet';
import morgan from './morgan';
import route from './route';
import general from './general';
import { Sockets } from './socket';
import { PostgresqlLoader } from './postgresql';

export {
  cors, helmet, morgan, Sockets, route, PostgresqlLoader, general,
};
