import { config } from 'dotenv';

const configurations = { path: '.production.env', debug: process.env.DEBUG };

if (process.env.NODE_ENV === 'development') {
  configurations.path = '.development.env';
}

export default function setEnviromentVariables() {
  return config(configurations);
}
