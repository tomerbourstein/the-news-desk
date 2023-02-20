import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: { newsData: [], weatherData: [] },
  reducers: {
    fetchNewsData(state, action) {
      state.newsData = action.payload;
    },
    fetchWeatherData(state, action) {
      state.weatherData = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
