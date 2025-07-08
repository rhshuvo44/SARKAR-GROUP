import { baseApi } from "../../api/api";


export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   getAllProjects: builder.query({
  query: (queryParams) => ({
    url: '/project/all',
    method: 'GET',
    params: queryParams,
  }),
  providesTags: ['Product'],
}),

  }),
});

export const { useGetAllProjectsQuery } = projectApi;
