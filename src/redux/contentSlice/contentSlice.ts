import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainContent = createApi({
  reducerPath: "articlesContent",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesType[], void>({
      query: () => "posts?_limit=5",
    }),
  }),
});

export const { useGetArticlesQuery } = mainContent;
