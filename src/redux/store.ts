import { configureStore } from "@reduxjs/toolkit";
import { mainContent } from "./contentSlice/contentSlice";

export const store = configureStore({
  reducer: {
    [mainContent.reducerPath]: mainContent.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainContent.middleware),
});
