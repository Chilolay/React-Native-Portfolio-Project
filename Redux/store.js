import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import categoryReducer from "../features/categorySlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    category: categoryReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
