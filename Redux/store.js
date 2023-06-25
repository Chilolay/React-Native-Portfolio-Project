import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import categoryReducer from "../features/categorySlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
