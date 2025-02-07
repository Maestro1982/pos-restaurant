import mongoose from 'mongoose';
import createHttpError from 'http-errors';

import Order from '../models/orderModel.js';

const addOrder = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201, {
      success: true,
      message: 'Order created successfully!',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true }
    );

    if (!order) {
      const error = createHttpError(404, 'Order not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Order updated successfully!',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const order = await Order.findById(id);

    if (!order) {
      const error = createHttpError(404, 'Order not found!');
      return next(error);
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    if (!orders) {
      const error = createHttpError(404, 'Orders not found!');
      return next(error);
    }

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};

export default { addOrder, updateOrder, getOrderById, getOrders };
