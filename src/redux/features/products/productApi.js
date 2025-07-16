import { baseApi } from "../../api/api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryParams) => ({
        url: "/product/all",
        method: "GET",
        params: queryParams,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
