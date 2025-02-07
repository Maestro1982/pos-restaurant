import express from 'express';

import tableController from '../controllers/tableController.js';
import isVerifiedUser from '../middleware/tokenVerification.js';

const router = express.Router();
const { addTable, updateTable, deleteTable, getTables } = tableController;

router.route('/').post(isVerifiedUser, addTable);
router.route('/:id').put(isVerifiedUser, updateTable);
router.route('/:id').delete(isVerifiedUser, deleteTable);
router.route('/').get(isVerifiedUser, getTables);

export default router;
