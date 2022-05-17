import { createSlice } from "@reduxjs/toolkit";

const DUMMY_PRODUCTS = [
  {
    title: "Book",
    id: "p1",
  },
  {
    title: "Pen",
    id: "p2",
  },
  {
    title: "Backpack",
    id: "p3",
  },
  {
    title: "Agenda",
    id: "p4",
  },
];

const initialState = {
  products: DUMMY_PRODUCTS,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
