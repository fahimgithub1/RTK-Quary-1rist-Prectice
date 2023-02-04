import { apiSlices } from "./baseApi";

export const productsApi = apiSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;

// *********** in one fole ***************
// =======================================
// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
//   endpoints: (builder) => ({
//     getAllProducts: builder.query({
//       query: () => "products",
//     }),
//     getProduct: builder.query({
//       query: (product) => `products/search?q=${product}`,
//     }),
//   }),
// });

// export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
