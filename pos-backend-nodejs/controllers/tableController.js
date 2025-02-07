import mongoose from 'mongoose';
import createHttpError from 'http-errors';

import Table from '../models/tableModel.js';

const addTable = async (req, res, next) => {
  try {
    const { tableNr } = req.body;

    if (!tableNr) {
      const error = createHttpError(404, 'Please provide a table number!');
      return next(error);
    }

    const isTablePresent = await Table.findOne({ tableNr });

    if (isTablePresent) {
      const error = createHttpError(404, 'Table already exists!');
      return next(error);
    }

    const newTable = new Table({ tableNr });
    await newTable.save();

    res.status(201).json({
      success: true,
      message: 'Table successfully created!',
      data: newTable,
    });
  } catch (error) {
    next(error);
  }
};

const updateTable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, orderId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const table = await Table.findByIdAndUpdate(
      id,
      { status, currentOrder: orderId },
      { new: true }
    );

    if (!table) {
      const error = createHttpError(404, 'Table not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Table updated successfully',
      data: table,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTable = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createHttpError(400, 'Invalid ID!'));
    }

    const table = await Table.findByIdAndDelete(id);

    if (!table) {
      return next(createHttpError(404, 'Table not found!'));
    }

    res.status(200).json({
      success: true,
      message: 'Table deleted successfully!',
      data: table,
    });
  } catch (error) {
    next(error);
  }
};

const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();

    if (!tables) {
      const error = createHttpError(404, 'Tables not found!');
      return next(error);
    }

    res.status(200).json({ success: true, data: tables });
  } catch (error) {
    next(error);
  }
};

export default { addTable, updateTable, deleteTable, getTables };
