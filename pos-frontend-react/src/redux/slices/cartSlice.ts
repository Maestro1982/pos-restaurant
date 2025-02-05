import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const getTotalPrice = (state: RootState) =>
  state.cart.reduce((total, item) => total + item.price, 0);
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
