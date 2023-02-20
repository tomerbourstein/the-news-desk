import { apiActions } from "./api-slice";
const api = "a1de8b9cad7a634536975361a087ac97";

export const fetchWeatherData = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=a1de8b9cad7a634536975361a087ac97`
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
      console.log(weatherData);
      dispatch(apiActions.fetchWeatherData(weatherData));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchNewsData = (category) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=7&apiKey=ecd3c224f6434c6b81fa5efd08585869`
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("The problem is " + data.code + ". " + data.message);
      }

      for (const article of data.articles) {
        article.category = category;
      }

      return data.articles;
    };
    try {
      const newsData = await fetchData();
      dispatch(apiActions.fetchNewsData(newsData));
    } catch (error) {
      console.log(error);
    }
  };
};
