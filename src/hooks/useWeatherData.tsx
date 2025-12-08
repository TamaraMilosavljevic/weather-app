import { useState, useEffect } from "react";
import { getData } from "../services/weather.service";
import type WeatherDataProps from "../types/app.types";

export const useWeatherData = (searchValue: string) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(searchValue);
      if (data)
        setWeatherData({
          humidity: data.main.humidity,
          temperature: Math.floor(data.main.temp),
          windSpeed: data.wind.speed,
          location: data.name,
          icon: data.weather[0].icon,
        });
    };
    fetchData();
  }, [searchValue]);
  return weatherData;
};
