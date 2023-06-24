import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { REACT_APP_CLIENT_ID } from "@env";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.boardgameatlas.com/api" }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: () =>
        `/search?name=${SearchValue}&pretty=true&fuzzy_match=true&client_id=f08QuEXBtp`,
    }),
    getCategories: builder.query({
      query: () => `/game/categories?pretty=true&client_id=f08QuEXBtp`,
    }),
    getGamePrices: builder.query({
      query: () =>
        `/game/prices?pretty=true&game_id=${gameID}&client_id=f08QuEXBtp`,
    }),
  }),
});

export const { useGetSearchQuery } = apiSlice;
export const { useGetCategoriesQuery } = apiSlice;
export const { useGetGamePricesQuery } = apiSlice;
