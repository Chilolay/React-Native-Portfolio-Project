import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    removeCurrent: (state) => {
      state.current = null;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, removeCurrent } = categorySlice.actions;

export default categorySlice.reducer;
