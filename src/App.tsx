import Property from "./components/WeatherCondition";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import type WeatherDataProps from "./types/app.types";
import WeatherTemperature from "./components/WeatherTemperature";
import { getData } from "./services/weather.service";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("Stockholm");
      if (data)
        setWeatherData({
          humidity: data.main.humidity,
          temperature: Math.floor(data.main.temp),
          windSpeed: data.wind.speed,
          location: data.name,
          condition: data.weather[0].main,
        });
    };
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
