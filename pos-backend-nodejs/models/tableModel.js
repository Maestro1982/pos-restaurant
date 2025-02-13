import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
  tableNr: { type: Number, required: true, unique: true },
  status: {
    type: String,
    default: 'Available',
  },
  seats: { type: Number, required: true },
  /* currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, */
  currentOrder: {
    customerDetails: {
      name: { type: String },
      phone: { type: String },
      guests: { type: Number },
    },
  },
});

const Table = mongoose.model('Table', tableSchema);
export default Table;
