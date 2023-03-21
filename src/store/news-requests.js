import { apiActions } from "./api-slice";
import NA from "../assets/not-available.jpg";
const weatherAPI = "a1de8b9cad7a634536975361a087ac97";
const newsAPI = "ecd3c224f6434c6b81fa5efd08585869";

export const fetchWeatherData = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${weatherAPI}`
      );
      const data = await response.json();

      const parsedData = {
        location: data.name,
        temp: data.main.temp,
        weather: data.weather[0].description,
        imgURL:
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png",
      };

      if (!response.ok) {
        throw new Error("Can't fetch the weather data");
      }

      return parsedData;
    };
    try {
      const weatherData = await fetchData();
      // console.log(weatherData);
      dispatch(apiActions.fetchWeatherData(weatherData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNewsData = (q, initial) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://newsapi.org/v2/everything?q=apple&from=2023-02-26&to=2023-02-26&sortBy=popularity&pageSize=7&apiKey=${newsAPI}`
        `https://newsapi.org/v2/everything?q=${q}&pageSize=2&apiKey=${newsAPI}`
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("The problem is " + data.code + ". " + data.message);
      }

      for (const article of data.articles) {
        article.category = q;
        if (!article.urlToImage) {
          article.urlToImage = NA;
        }
      }
      // console.log(data);
      return data.articles;
    };
    try {
      const newsData = await fetchData();
      console.log(newsData);
      if (initial) {
        dispatch(apiActions.fetchNewsData(newsData));
      }
      if (!initial) {
        dispatch(apiActions.fetchNewsWithNewPreferences(newsData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNewsCategoriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/data/news-categories.json");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("No categories to show.");
      }
      return data.categories;
    };
    try {
      const newsCategoriesData = await fetchData();
      dispatch(apiActions.fetchNewsCategoriesData(newsCategoriesData));
    } catch (error) {
      console.log(error);
    }
  };
};
