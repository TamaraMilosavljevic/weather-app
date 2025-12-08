import { useMemo } from "react";
import { getIconUrl } from "../constants";

interface WeatherTemperatureProps {
  location?: string;
  value?: number;
  icon?: string;
}
const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
  location,
  value = 0,
  icon = "10d",
}) => {
  const imgSrc = useMemo(() => getIconUrl(icon), [icon]);

  return (
    <div className="flex flex-col justify-center align-center gap-6">
      <div className="flex flex-1 justify-center items-center text-white">
        <img src={imgSrc} alt={icon} className="w-36 h-36" />
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
