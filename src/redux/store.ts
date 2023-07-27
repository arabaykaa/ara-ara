import { configureStore } from "@reduxjs/toolkit";
import { mainContent } from "./contentSlice/contentSlice";
import { contentMore } from "./contentSlice/contentMoreSlice";

export const store = configureStore({
  reducer: {
    [mainContent.reducerPath]: mainContent.reducer,
    [contentMore.reducerPath]: contentMore.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(mainContent.middleware)
      .concat(contentMore.middleware),
});
