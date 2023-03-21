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
    },
    fetchNewsWithNewPreferences(state, action) {
      const newList = state.newsData.concat(action.payload);
      const maxSevenItemsList = chooseRandomItems(newList, 7);
      state.newsData = maxSevenItemsList;
    },
    clearNewsData(state) {
      state.newsData = [];
    },

    fetchWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    fetchNewsCategoriesData(state, action) {
      state.categories = chooseRandomItems(action.payload, 15);
    },
    updateCategories(state, action) {
      const newArr = state.categories.filter((e) => e.name != action.payload);
      state.categories = newArr;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
