import * as AuthService from 'services/auth';
import * as JWTService from 'services/jwt';
import * as SessionService from 'services/session';
import EmailService from 'services/email';

import setEnviromentVariables from 'config/env';

setEnviromentVariables();

const LoginController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const auth = await AuthService.login({ username, email, password });

    if (auth.success) {
      const { refreshToken } = await SessionService.generate({ id: auth.user.id });

      res.cookie('token', refreshToken, { httpOnly: true, signed: true, secure: process.env.ENVIROMENT !== 'development' });
      res.status(200).json({ success: true, status: 200, token: auth.accessToken });
    } else {
      res.status(400).json({ success: false, statusCode: 400, server: 'Forbiden' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, statusCode: 500, server: 'Server error' });
  }
};

const RegisterController = async (req, res) => {
  try {
    const {
      username, email, password, firstname, lastname, bio, website, birthday,
    } = req.body;

    const auth = await AuthService.register({
      username,
      email,
      password,
      firstname,
      lastname,
      bio,
      website,
      birthday,
    });

    if (auth.success) {
      const { refreshToken } = await SessionService.generate({ id: auth.user.id });

      // Send email to user for verify account
      const Email = new EmailService();
      await Email.generate({ userID: auth.user.id, email: auth.user.email });
      await Email.send();

      res.cookie('token', refreshToken, { httpOnly: true, signed: true, secure: process.env.ENVIROMENT !== 'development' });
      res.status(200).json({ success: true, status: 200, token: auth.accessToken });
    } else {
      res.status(400).json({ success: false, statusCode: 400, server: 'Forbiden' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, statusCode: 500, server: 'Server error' });
  }
};

const RenewController = async (req, res) => {
  // const {
  //   username, email, password, firstname, lastname, bio, website, birthday,
  // } = req.body;

  // const auth = await AuthService.register({
  //   username,
  //   email,
  //   password,
  //   firstname,
  //   lastname,
  //   bio,
  //   website,
  //   birthday,
  // });

  // res.status(auth.succes ? 200 : 400).json(auth.response);

  const msg = JWTService.verify(JWTService.sign({ mg: 'H' }));

  console.log(req.signedCookies);

  res.json(msg);
};

export {
  LoginController,
  RegisterController,
  RenewController,
};
