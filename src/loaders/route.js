import { PREFIX, ROUTES } from "routes/index"

module.exports = (server) => {

    const getPath = (path, prefix) =>  prefix ? `${PREFIX}${path}` : path;

    ROUTES.forEach(({path, type, controller, middlewares, prefix = true}) => {
        if(middlewares) {
            server.app[type](getPath(path, prefix), middlewares, controller)
        } else {
            server.app[type](getPath(path, prefix), controller)
        }
    });

    return server
};
