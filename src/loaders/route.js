const {PREFIX, ROUTES} = require("./../routes/index")

module.exports = (server) => {

    ROUTES.forEach(route => {
        if(route.middleware) {
            server.app[route.type](`${PREFIX}${route.path}`, route.middleware, route.controller)
        } else {
            server.app[route.type](`${PREFIX}${route.path}`, route.controller)
        }
    });

    return server
};
