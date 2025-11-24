import WeatherCondition from "./components/WeatherCondition";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import type WeatherDataProps from "./types/app.types";
import WeatherTemperature from "./components/WeatherTemperature";
import type { WeatherDataResponse } from "./types/app.types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();
  const [searchValue, setSearchValue] = useState<string>("");
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
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => getData(searchValue);
    fetchData();
  }, [searchValue]);

  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-max max-h-max py-10 px-7 flex flex-1 flex-col justify-center items-center gap-10 rounded-lg bg-linear-120 from-turquoise via-marine to-darkblue shadow-lg">
        <Search name="Search" setName={setSearchValue} />
        <WeatherTemperature
          location={weatherData?.location || "Find city"}
          icon={weatherData?.icon}
          value={weatherData?.temperature}
        />
        <div className="flex sm:flex-row gap-8 flex-col">
          <WeatherCondition
            name="humidity"
            value={weatherData?.humidity || 0}
            unit="%"
          />
          <WeatherCondition
            name="windspeed"
            value={weatherData?.windSpeed || 0}
            unit="km/h"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
