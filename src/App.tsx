import Property from "./components/WeatherCondition";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import type WeatherDataProps from "./types/app.types";
import WeatherTemperature from "./components/WeatherTemperature";
import type { WeatherDataResponse } from "./types/app.types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();
  const getData = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`
      );
      const data: WeatherDataResponse = await response.json();
      setWeatherData({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
        windSpeed: data.wind.speed,
        location: data.name,
        condition: data.weather[0].main,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => getData("Stockholm+");
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-max py-10 px-7 flex flex-1 flex-col justify-center items-center gap-10 rounded-lg bg-linear-120 from-turquoise via-marine to-darkblue shadow-lg">
        <Search name="Search" />
        <WeatherTemperature
          location={weatherData?.location}
          condition={weatherData?.condition}
          value={weatherData?.temperature}
        />
        <div className="flex sm:flex-row gap-8 flex-col">
          <Property name="humidity" value={`${weatherData?.humidity} %`} />
          <Property name="windspeed" value={`${weatherData?.windSpeed} km/h`} />
        </div>
      </div>
    </div>
  );
}
export default App;
