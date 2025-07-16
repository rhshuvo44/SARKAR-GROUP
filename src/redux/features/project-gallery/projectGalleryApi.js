import { baseApi } from "../../api/api";

export const projectGalleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjectGallery: builder.query({
      query: (queryParams) => ({
        url: "/project-gallery/all",
        method: "GET",
        params: queryParams,
      }),
      providesTags: ["Project-Gallery"],
    }),
    getSingleProjectGallery: builder.query({
      query: (id) => ({
        url: `/project-gallery/${id}`,
        method: "GET",
      }),
      providesTags: ["Project-Gallery"],
    }),
  }),
});

export const { useGetAllProjectGalleryQuery, useGetSingleProjectGalleryQuery } =
  projectGalleryApi;
