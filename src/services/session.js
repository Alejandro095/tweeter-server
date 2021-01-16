import Session from 'models/session';
import { v4 } from 'uuid';

const generate = async ({ id: userID }) => {
  const uuid = v4();

  const session = new Session({ uuid, userID });

  await session.save();

  return {
    success: true,
    refreshToken: uuid,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  generate,
};
