import { Pool } from 'loaders/postgresql';

export async function LoginController(req, res) {
  // console.log(res)

  return res.json(await (await Pool.query('SELECT * FROM test;')).rows);
}

export function RegisterController() {}
