import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PostsType = { id: string; name: string; description: string }[];

const METHODS = { POST: "POST", DELETE: "DELETE" };
const URL = "http://localhost/api/";
const TAG = "Post";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: [TAG],
  endpoints: (builder) => ({
    posts: builder.query<PostsType, string>({
      query: () => "/posts",
      providesTags: [TAG],
    }),
    createPost: builder.mutation({
      query: (body) => ({ url: "/posts", method: METHODS.POST, body }),
      invalidatesTags: [TAG],
    }),
    deletePost: builder.mutation({
      query: (id) => ({ url: `/posts/${id}`, method: METHODS.DELETE }),
      invalidatesTags: [TAG],
    }),
  }),
});

const { usePostsQuery, useCreatePostMutation, useDeletePostMutation } =
  postsApi;

export {
  postsApi,
  usePostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
};
