import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Basic baseQuery without token or refresh handling
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Product", "Project", "Project-Gallery"],
  endpoints: () => ({}),
});
