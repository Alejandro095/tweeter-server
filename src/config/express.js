import app from "express"
import { Server } from "http";

const App = app();
const http = Server(App);

export default async function (loaders) {
    await loaders.forEach( async(loader) => await loader({app: App, http}) );
    return http;
}