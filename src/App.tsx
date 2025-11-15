import Property from "./components/Property";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="w-full min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-max py-10 px-7 flex flex-col justify-center items-center gap-10 rounded-2xl bg-linear-120 from-turquoise via-marine to-darkblue px-6 py-4 shadow-lg">
        <Search name="Search" />
        <Weather condition="Clear" />
        <div className="flex sm:flex-row gap-8 flex-col">
          <Property name="Humidity" value="48%" />
          <Property name="Wind Speed" value="10.29 km/h" />
        </div>
      </div>
    </div>
  );
}
export default App;
