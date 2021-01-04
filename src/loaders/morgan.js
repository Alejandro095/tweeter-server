const morgan = require('morgan')

module.exports = (server) => {

    if(process.env.NODE_ENV == "development") {
        server.app.use(morgan("dev"))
    } {
        server.app.use(morgan("tiny"))
    }
    
    return server;
}