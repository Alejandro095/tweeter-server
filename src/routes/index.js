const { LoginController } = require("./../controllers/auth");
const { ErrorController } = require("./../controllers/error")

const PREFIX = "/api/v1"
const ROUTES = [
    { path: "/auth/login", type:"get", controller: LoginController},
    { path: "*", type:"all", controller: ErrorController, prefix: false}
];

module.exports = {PREFIX, ROUTES}