import User from './model';
import { createToken } from './utils/createToken';

export const loginWithAuth0 = async (req, res) => {
  const { ...args } = req.body;

  try {
    const user = await await User.create();
    return res.status(201).json({
      data: user,
      token: `JWT ${createToken(user)}`,
      error: false,
      message: 'User create',
    });
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: 'Something wrong with auth',
    });
  }
};
