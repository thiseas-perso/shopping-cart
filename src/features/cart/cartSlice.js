import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartVisible: false,
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
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
    removeFromCart(state, action) {
      const { id } = action.payload;
      const existingProduct = state.products.find(
        (element) => element.id === id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, toggleVisible, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
