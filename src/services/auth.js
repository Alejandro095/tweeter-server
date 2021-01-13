import { Pool } from 'loaders/postgresql';

module.exports = {

  login: async (req, res) => res.json(await (await Pool.query('SELECT * FROM test;')).rows),

  register: async () => {

  },

  renewToken: async () => {

  },

};
