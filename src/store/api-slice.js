import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: { newsData: [] },
  reducers: {
    fetchNewsData(state, action) {
      state.newsData = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
