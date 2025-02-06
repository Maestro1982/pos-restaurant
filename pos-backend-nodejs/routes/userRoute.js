import express from 'express';

import userController from '../controllers/userController.js';

const router = express.Router();
const { register, login } = userController;

// Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);

export default router;
