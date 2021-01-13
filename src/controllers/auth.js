
import AuthService from "./../services/auth"

const LoginController = async (req, res) => {

    const { username, email, password} = req.body;

    const auth = await AuthService.login({username, email, password});

    res.status(auth.succes ? 200 : 400).json(auth.response);
}

const RegisterController = async (req, res) => {

    const { username, email, password, firstname,lastname, bio, website, birthday } = req.body;

    const auth = await AuthService.register({ username, email, password, firstname,lastname, bio, website, birthday });

    res.status(auth.succes ? 200 : 400).json(auth.response);
}

const RenewController = async (req, res) => {

    const { username, email, password, firstname,lastname, bio, website, birthday } = req.body;

    const auth = await AuthService.register({ username, email, password, firstname,lastname, bio, website, birthday });

    res.status(auth.succes ? 200 : 400).json(auth.response);

}

module.exports = {LoginController, RegisterController, RenewController}