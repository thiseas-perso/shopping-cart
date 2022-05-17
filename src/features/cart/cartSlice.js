import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartVisible: false,
  },
  reducers: {
    addToCart(state, action) {
      const { id, title, quantity } = action.payload;
      const existingProduct = state.products.find(
        (element) => element.id === id
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    toggleVisible(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { addToCart, toggleVisible } = cartSlice.actions;
export default cartSlice.reducer;
