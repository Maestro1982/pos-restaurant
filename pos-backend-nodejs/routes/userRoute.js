import express from 'express';

import userController from '../controllers/userController.js';
import isVerifiedUser from '../middleware/tokenVerification.js';

const router = express.Router();
const { register, login, getUserData, logout } = userController;

// Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(isVerifiedUser, logout);

router.route('/').get(isVerifiedUser, getUserData);

export default router;
