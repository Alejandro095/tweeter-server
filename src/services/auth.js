import * as Bncrypt from 'services/bncrypt';
import * as JWT from 'services/jwt';
import User from 'models/user';

const login = async ({ username, email, password }) => {
  const { success, user } = await User.one(username, email);

  if (success && Bncrypt.check(password, user.password)) {
    return {
      success: true,
      accessToken: JWT.sign(user),
      user,
    };
  }

  return {
    success: false,
    message: 'Usuario o contraseña erroneos',
  };
};

const register = async ({
  username, email, password, firstname, lastname, bio, website, birthday,
}) => {
  const userExists = await User.one(username, email);

  if (!userExists.success) {
    const passwordHash = Bncrypt.hash(password);

    const user = new User({
      username, email, password: passwordHash, firstname, lastname, bio, website, birthday,
    });

    const result = await user.save();

    return {
      success: result.success,
      accessToken: result.success ? JWT.sign(result.user) : undefined,
      user: result.user || undefined,
    };
  }
  return {
    success: false,
  };
};

const renew = async () => {

};

const signOut = async () => {

};

export {
  login,
  register,
  renew,
  signOut,
};
