import setEnviromentVariables from 'config/env';

import jwt from 'jsonwebtoken';

setEnviromentVariables();

const signOptions = {
  issuer: process.env.ISSUER,
  subject: process.env.SUBJECT,
  audience: process.env.AUDIENCE,
  expiresIn: parseInt(process.env.EXPIRESIN, 10),
  algorithm: 'RS256',
};

const verifyOptions = {
  issuer: process.env.ISSUER,
  subject: process.env.SUBJECT,
  audience: process.env.AUDIENCE,
  expiresIn: parseInt(process.env.EXPIRESIN, 10),
  algorithms: 'RS256',
};

const sign = (payload) => jwt.sign(payload, process.env.PRIVATE_KEY, signOptions);

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.PUBLIC_KEY, verifyOptions);
  } catch (err) {
    return false;
  }
};

const decode = (token) => jwt.decode(token, { complete: true });

export { verify, sign, decode };
