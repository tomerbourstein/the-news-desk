import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import apiSlice from "./api-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, api: apiSlice.reducer },
});

export default store;
