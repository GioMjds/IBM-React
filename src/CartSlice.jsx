import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, description, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ name, image, description, cost, quantity: 1 });
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) itemToUpdate.quantity = amount;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
