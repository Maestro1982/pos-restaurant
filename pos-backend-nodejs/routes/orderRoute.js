import express from 'express';

import isVerifiedUser from '../middleware/tokenVerification.js';
import orderController from '../controllers/orderController.js';

const router = express.Router();
const { addOrder, updateOrder, getOrderById, getOrders } = orderController;

router.route('/').post(isVerifiedUser, addOrder);
router.route('/:id').put(isVerifiedUser, updateOrder);
router.route('/:id').get(isVerifiedUser, getOrderById);
router.route('/').get(isVerifiedUser, getOrders);

export default router;
