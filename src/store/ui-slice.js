import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { authForm: true },
  reducers: {
    toggleAuthForm(state) {
      state.authForm = !state.authForm;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
