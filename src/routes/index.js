const { LoginController } = require("./../controllers/auth");
const { ErrorController } = require("./../controllers/error")

const PREFIX = "/api/v1"
const ROUTES = [
    { type:"get", controller: LoginController, path: "/auth/login", },
    { type:"all", controller: ErrorController, path: "*", prefix: false}
];

module.exports = {PREFIX, ROUTES}