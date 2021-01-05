const setEnviromentVariables = require("./src/config/env")();
const Prepare = require("./src/config/express");
const {cors, helmet, morgan, socket, route, postgresql, general} = require("./src/loaders")

Prepare([cors, helmet, morgan, general, route, postgresql, socket])
    .then( http => http.listen(process.env.PORT || 80))
    .then( () => console.log("Server is ready!"))
    .catch(console.log);

