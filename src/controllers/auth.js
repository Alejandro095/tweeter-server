const { Pool } = require("./../loaders/postgresql")


const LoginController = async (req, res) => {

    // console.log(res)

    console.log(await (await Pool.query("SELECT * FROM test;")).rows);

    return res.json(await (await Pool.query("SELECT * FROM test;")).rows)
}

const RegisterController = (req, res) => {

}

module.exports = {LoginController, RegisterController}