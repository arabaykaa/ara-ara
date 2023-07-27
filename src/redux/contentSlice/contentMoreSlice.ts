import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const contentMore = createApi({
  reducerPath: "articlesContentMore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getArticlesMore: builder.query<ArticlesType, string>({
      query: (id) => ({ url: `posts/${id}` }),
    }),
  }),
});

export const { useGetArticlesMoreQuery } = contentMore;
