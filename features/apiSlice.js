import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_API, CLIENT_ID } from "@env";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${APP_API}` }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (searchValue) =>
        `/search?name=${searchValue}&pretty=true&fuzzy_match=true&client_id=${CLIENT_ID}`,
    }),
    getCategories: builder.query({
      query: (categoryValue) =>
        `search?categories=${categoryValue}&pretty=true&client_id=${CLIENT_ID}`,
    }),
    getGamePrices: builder.query({
      query: (gameID) =>
        `/game/prices?pretty=true&game_id=${gameID}&client_id=${CLIENT_ID}`,
    }),
  }),
});

export const { useGetSearchQuery } = apiSlice;
export const { useGetCategoriesQuery } = apiSlice;
export const { useGetGamePricesQuery } = apiSlice;
