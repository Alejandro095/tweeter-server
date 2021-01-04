const {config} = require("dotenv")

const configurations = { path: ".env.production", debug: process.env.DEBUG }

if(process.env.NODE_ENV === "development") {
    configurations.path = ".env.development"
}

module.exports = function setEnviromentVariables() {
    return config(configurations)
}