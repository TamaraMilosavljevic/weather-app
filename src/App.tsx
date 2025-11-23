import Property from "./components/Property";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { useEffect } from "react";

function App() {
  const getData = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`
      );
      const data = await response.json();
      console.log(data);
      console.log(import.meta.env.VITE_API_ID);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getData("Belgrade");
  }, []);

  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-max py-10 px-7 flex flex-1 flex-col justify-center items-center gap-10 rounded-lg bg-linear-120 from-turquoise via-marine to-darkblue shadow-lg">
        <Search name="Search" />
        <Weather condition="Clear" />
        <div className="flex sm:flex-row gap-8 flex-col">
          <Property name="humidity" value="48%" />
          <Property name="windspeed" value="10.29 km/h" />
        </div>
      </div>
    </div>
  );
}
export default App;
