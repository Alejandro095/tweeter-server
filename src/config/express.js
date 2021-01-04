const app = require("express")()
const http = require("http").Server(app)

module.exports = async (loaders) => {
    await loaders.forEach( async(loader) => await loader({app, http}) );
    return http;
}