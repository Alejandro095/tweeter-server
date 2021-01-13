const { LoginController, RegisterController, RenewController } = require("./../controllers/auth");
const { ErrorController } = require("./../controllers/error")

// Validators
const { loginValidation } = require("./../validations/user");
const checkValidation = require("./../middleware/validation-result")

const PREFIX = "/api"
const ROUTES = [
    // Auth routes
    { type:"post",  controller: LoginController,    path: "/auth/login", middlewares: [loginValidation(), checkValidation]},
    { type:"post",  controller: RegisterController, path: "/auth/register"},
    { type:"get",   controller: RenewController,    path: "/auth/session-renew"},

    { type:"all",   controller: ErrorController, path: "*", prefix: false}
];

module.exports = {PREFIX, ROUTES}