const { LoginController } = require("./../controllers/auth");
const { ErrorController } = require("./../controllers/error")

const PREFIX = "/api"
const ROUTES = [
    // Auth routes
    { type:"all",  controller: LoginController, path: "/auth/login"},
    { type:"post",  controller: LoginController, path: "/auth/register"},
    { type:"get",   controller: LoginController, path: "/auth/renew"},

    { type:"all",   controller: ErrorController, path: "*", prefix: false}
];

module.exports = {PREFIX, ROUTES}