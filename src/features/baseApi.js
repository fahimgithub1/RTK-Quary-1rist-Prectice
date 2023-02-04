import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlices = createApi({
  reducerPath: "Api",
  endpoints: () => ({}),
  tagTypes: [],
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dummyjson.com/" 
  }),
});
