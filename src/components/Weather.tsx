import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";

interface WeatherProps {
  condition: string;
}
const weatherIcons: Record<string, string> = {
  Clear: clear,
  Clouds: cloud,
  Drizzle: drizzle,
  Rain: rain,
  Snow: snow,
};

const Weather: React.FC<WeatherProps> = ({ condition = "Clear" }) => {
  const icon = weatherIcons[condition];
  return (
    <div className="flex flex-col justify-center align-center gap-6">
      <div className="text-white">
        <img src={icon} alt={condition} className="w-36 h-36" />
      </div>
      <div className="flex flex-col justify-center align-center gap-2">
        <p className="text-6xl text-white font-medium text-center">12&#176;c</p>
        <p className="text-4xl text-white font-medium">Belgrade</p>
      </div>
    </div>
  );
};

export default Weather;
