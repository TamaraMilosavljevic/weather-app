import WeatherCondition from "./components/WeatherCondition";
import Search from "./components/Search";
import { useState } from "react";
import WeatherTemperature from "./components/WeatherTemperature";
import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const [searchValue, setSearchValue] = useState<string>("Belgrade");
  const weatherData = useWeatherData(searchValue);

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
