import { baseApi } from "../../api/api";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: (queryParams) => ({
        url: "/project/all",
        method: "GET",
        params: queryParams,
      }),
      providesTags: ["project"],
    }),
    getSingleProject: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetSingleProjectQuery } = projectApi;
