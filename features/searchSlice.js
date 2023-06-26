import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    removeCurrent: (state) => {
      state.current = "";
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, removeCurrent } = searchSlice.actions;

export default searchSlice.reducer;
