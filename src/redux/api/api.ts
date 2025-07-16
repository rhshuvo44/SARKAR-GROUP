import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Basic baseQuery without token or refresh handling
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.sarkargroupofcompanies.com/smd/api/v1',
  credentials: 'include', 
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['Product','Project','Project-Gallery'], 
  endpoints: () => ({}), 
});
