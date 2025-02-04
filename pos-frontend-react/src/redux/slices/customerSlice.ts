import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderId: '',
  customerName: '',
  customerPhone: '',
  guests: 0,
  tableNr: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      const { name, phone, guests } = action.payload;
      state.orderId = `${Date.now()}`;
      state.customerName = name;
      state.customerPhone = phone;
      state.guests = guests;
    },
    removeCustomer: (state) => {
      state.customerName = '';
      state.customerPhone = '';
      state.guests = 0;
      state.tableNr = '';
    },
    updateTable: (state, action) => {
      state.tableNr = action.payload.tableNr;
    },
  },
});

export const { setCustomer, removeCustomer, updateTable } =
  customerSlice.actions;
export default customerSlice.reducer;
