import { json, urlencoded } from "body-parser";
import express from "express";

module.exports = (server) => {

    server.app.use(json())
    server.app.use(urlencoded({ extended: false }))
    
    server.app.use("/", express.static(__dirname + "./../../public"));
    
    return server;
};


