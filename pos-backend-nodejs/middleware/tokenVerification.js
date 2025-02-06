import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';

import config from '../config/config.js';
import User from '../models/userModel.js';

const isVerifiedUser = async (req, res, next) => {
  try {
    // Get access token from cookies
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      const error = createHttpError(401, 'Please provide accessToken!');
      return next(error);
    }

    // Verify token
    const decodeToken = jwt.verify(accessToken, config.accessTokenSecret);

    const user = await User.findById(decodeToken._id);

    if (!user) {
      const error = createHttpError(401, 'User does not exist!');
      return next(error);
    }

    req.user = user;
    next();
  } catch (error) {
    const err = createHttpError(401, 'Invalid token!');
    return next(err);
  }
};

export default isVerifiedUser;
