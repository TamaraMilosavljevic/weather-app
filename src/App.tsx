import WeatherCondition from "./components/WeatherCondition";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import type WeatherDataProps from "./types/app.types";
import WeatherTemperature from "./components/WeatherTemperature";
import { getData } from "./services/weather.service";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();
  const [searchValue, setSearchValue] = useState<string>("Belgrade");

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
