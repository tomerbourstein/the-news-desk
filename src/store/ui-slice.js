import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    authForm: true,
    isLoading: false,
    authVisible: true,
    newsVisible: false,
  },
  reducers: {
    toggleAuthForm(state) {
      state.authForm = !state.authForm;
    },
    setLoadingState(state, action) {
      state.isLoading = action.payload;
      if (action.payload) {
        state.authVisible = false;
        state.newsVisible = false;
      }
    },
    login(state) {
      state.newsVisible = true;
      state.isLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
