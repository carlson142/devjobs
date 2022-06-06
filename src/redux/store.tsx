import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSlice from "./toggleSlice";

export const store = configureStore({
  reducer: {
    toggleReducer: toggleSlice,
    searchReducer: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
