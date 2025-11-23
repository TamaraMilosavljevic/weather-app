import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";

interface WeatherTemperatureProps {
  condition?: string;
  location?: string;
  value?: number;
}
const weatherTemperatureIcons: Record<string, string> = {
  Clear: clear,
  Clouds: cloud,
  Drizzle: drizzle,
  Rain: rain,
  Snow: snow,
};

const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
  condition = "Clear",
  location,
  value = 0,
}) => {
  const icon = weatherTemperatureIcons[condition];
  return (
    <div className="flex flex-col justify-center align-center gap-6">
      <div className="text-white">
        <img src={icon} alt={condition} className="w-36 h-36" />
      </div>
      <div className="flex flex-col justify-center align-center gap-2">
        <p className="text-6xl text-white font-medium text-center">
          {value}&#176;c
        </p>
        <p className="text-4xl text-white font-medium">{location}</p>
      </div>
    </div>
  );
};

export default WeatherTemperature;
