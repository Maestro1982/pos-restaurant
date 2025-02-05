import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    customer: customerSlice,
    cart: cartSlice,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
});

// ✅ Export RootState type
export type RootState = ReturnType<typeof store.getState>;
// ✅ Export AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
