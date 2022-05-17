import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartVisible: false,
  },
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },
    toggleVisible(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { addToCart, toggleVisible } = cartSlice.actions;
export default cartSlice.reducer;
