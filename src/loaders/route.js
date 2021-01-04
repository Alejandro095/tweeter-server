const {PREFIX, ROUTES} = require("./../routes/index")

module.exports = (server) => {

    const getPath = (path, prefix) =>  prefix ? `${PREFIX}${path}` : path;

    ROUTES.forEach(({path, type, controller, middleware, prefix = true}) => {
        if(middleware) {
            server.app[type](getPath(path, prefix), middleware, controller)
        } else {
            server.app[type](getPath(path, prefix), controller)
        }
    });

    return server
};
