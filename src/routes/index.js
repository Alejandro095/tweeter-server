import { LoginController } from 'controllers/auth';
import { ErrorController } from 'controllers/error';

// Validators
import { login } from 'validations/user';
import validationResult from 'middleware/validation-result';

const PREFIX = '/api';
const ROUTES = [
  // Auth routes
  {
    type: 'post', controller: LoginController, path: '/auth/login', middlewares: [login(), validationResult],
  },
  { type: 'post', controller: LoginController, path: '/auth/register' },
  { type: 'get', controller: LoginController, path: '/auth/renew' },

  {
    type: 'all', controller: ErrorController, path: '*', prefix: false,
  },
];

export { PREFIX, ROUTES };
