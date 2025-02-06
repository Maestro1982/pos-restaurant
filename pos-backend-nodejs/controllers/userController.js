import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config/config.js';

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

    res.status(201).json({
      success: true,
      message: 'User registered successfully!',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = createHttpError(400, 'All fields are required!');
      return next(error);
    }

    // Find user in db
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = createHttpError(401, 'Invalid credentials!');
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      const error = createHttpError(401, 'Invalid credentials!');
      return next(error);
    }

    // Generate JWT
    const accessToken = jwt.sign(
      { _id: existingUser._id },
      config.accessTokenSecret,
      {
        expiresIn: '1d',
      }
    );

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    res.status(200).json({
      success: true,
      message: 'User login successfully!',
      data: existingUser,
    });
  } catch (error) {
    next(error);
  }
};

const getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export default { register, login, getUserData };
