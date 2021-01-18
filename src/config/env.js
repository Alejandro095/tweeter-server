import { config } from 'dotenv';

const configurations = { path: '.env.production', debug: process.env.DEBUG };

if (process.env.NODE_ENV === 'development') {
  configurations.path = '.env.development';
}
config(configurations);

export default function setEnviromentVariables() {
  const configurations = { path: '.env.production', debug: process.env.DEBUG };

  if (process.env.NODE_ENV === 'development') {
    configurations.path = '.env.development';
  }

  return config(configurations);
}
