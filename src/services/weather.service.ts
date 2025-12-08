import type { WeatherDataResponse } from "../types/app.types";

export const getData = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`
    );
    const data: WeatherDataResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error}`);
  }
};
