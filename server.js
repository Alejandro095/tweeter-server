const setEnviromentVariables = require("./src/config/env")();
const Prepare = require("./src/config/express");
const {cors,helmet,morgan, socket, route} = require("./src/loaders")

Prepare([morgan,helmet,cors, socket, route])
    .then( http => http.listen(process.env.PORT || 80))
    .then( () => console.log("Server is ready!"))
    .catch(console.log);

