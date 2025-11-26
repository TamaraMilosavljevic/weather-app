import Property from "./components/Property";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { getData } from "./services/weather.service";

function App() {
  getData("Belgrade");

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
