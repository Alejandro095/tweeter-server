import { Pool } from "./../loaders/postgresql"


export async function LoginController (req, res) {

    // console.log(res)

    console.log(await (await Pool.query("SELECT * FROM test;")).rows);

    return res.json(await (await Pool.query("SELECT * FROM test;")).rows)
}

export async function RegisterController (req, res) {

}