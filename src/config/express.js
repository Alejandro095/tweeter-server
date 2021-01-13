import app from 'express';
import { Server } from 'http';

const App = app();
const http = Server(App);

export default async function Loader(loaders) {
  await loaders.forEach((loader) => loader({ app: App, http }));
  return http;
}
