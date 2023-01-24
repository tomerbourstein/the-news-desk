import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { authForm: true, isLoading: false },
  reducers: {
    toggleAuthForm(state) {
      state.authForm = !state.authForm;
    },
    setLoadingState(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
