import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: { newsData: [], weatherData: [] },
  reducers: {
    fetchNewsData(state, action) {
      if (state.newsData.length === 0) {
        state.newsData = action.payload;
      }
      state.newsData.concat(action.payload);
    },
    fetchWeatherData(state, action) {
      state.weatherData = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
