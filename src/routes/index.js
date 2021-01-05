const { LoginController } = require("./../controllers/auth");
const { ErrorController } = require("./../controllers/error")

// Validators
const { login } = require("./../validations/user");
const validationResult = require("./../middleware/validation-result")

const PREFIX = "/api"
const ROUTES = [
    // Auth routes
    { type:"post",  controller: LoginController, path: "/auth/login", middlewares: [...login(), validationResult]},
    { type:"post",  controller: LoginController, path: "/auth/register"},
    { type:"get",   controller: LoginController, path: "/auth/renew"},

    { type:"all",   controller: ErrorController, path: "*", prefix: false}
];

module.exports = {PREFIX, ROUTES}