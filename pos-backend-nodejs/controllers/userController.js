import createHttpError from 'http-errors';

import User from '../models/userModel.js';

const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || !email || !phone || !password || !role) {
      const error = createHttpError(400, 'All fields are required!');
      return next(error);
    }

    // Check if user already exists in db
    const isUserPresent = await User.findOne({ email });

    if (isUserPresent) {
      const error = createHttpError(400, 'User already exists!');
      return next(error);
    }

    // Create a new user
    const newUser = new User({ name, email, phone, password, role });
    await newUser.save();

    res
      .status(201)
      .json({
        success: true,
        message: 'User registered successfully!',
        data: newUser,
      });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {};

export default { register, login };
