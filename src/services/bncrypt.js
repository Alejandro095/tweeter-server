import { compareSync, hashSync } from 'bcryptjs';

const hash = (password) => hashSync(password, 10);

const check = (password, passwordHash) => compareSync(password, passwordHash);

export {
  hash, check,
};
