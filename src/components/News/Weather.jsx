import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../../store/news-requests";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./Weather.module.css";
import { useState } from "react";

const Weather = () => {
  const weatherData = useSelector((state) => state.api.weatherData);
  const dispatch = useDispatch();
  const [dayAndTime, setDayAndTime] = useState("");

  function capitalizeWords(str) {
    if (!str) return;
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  const getCurrentDayAndTime = () => {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${dayOfWeek} ${hours}:${minutes}`;
  };

  useEffect(() => {
    getUserLocation()
      .then((location) => {
        dispatch(fetchWeatherData(location.latitude, location.longitude));
      })
      .catch((error) => {
        console.error(error);
      });

    setDayAndTime(getCurrentDayAndTime());
  }, []);

  return (
    <Box className={classes.weatherComponent}>
      <Box className={classes.container}>
        <img src={weatherData.imgURL} />

        <Box>
          <Typography>{weatherData.location}</Typography>
          <Typography>{dayAndTime}</Typography>
          <Typography>{capitalizeWords(weatherData.weather)}</Typography>
        </Box>

        <Typography sx={{ fontSize: 30 }}>
          {Math.floor(weatherData.temp) + "°C"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Weather;
