import { createSlice } from "@reduxjs/toolkit";
import { chooseRandomItems } from "../utils/index";

const apiSlice = createSlice({
  name: "api",
  initialState: { newsData: [], weatherData: [], categories: [] },
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
    fetchNewsCategoriesData(state, action) {
      state.categories = chooseRandomItems(action.payload);
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
