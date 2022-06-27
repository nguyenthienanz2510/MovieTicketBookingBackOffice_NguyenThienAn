import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./slices/demoSlice";
import spinnerSlice from "./slices/spinnerSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    demoSlice,
    userSlice,
    spinnerSlice,
  },
});
