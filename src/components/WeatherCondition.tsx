import HumidityIcon from "../assets/humidity.png";
import WindIcon from "../assets/wind.png";
import type { WeatherConditionProps } from "../types/weathercondition.types";

const weatherConditionIcons: Record<string, string> = {
  humidity: HumidityIcon,
  windspeed: WindIcon,
};

const WeatherCondition: React.FC<WeatherConditionProps> = ({ name, value }) => {
  const icon = weatherConditionIcons[name];
  let ConditionTitle = "";
  if (name === "windspeed") {
    ConditionTitle = "Wind Speed";
  } else {
    ConditionTitle = "Humidity";
  }

  return (
    <div className="flex flex-row justify-center align-center gap-3">
      <div className="text-white">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <p className="text-2xl text-white font-medium">{value}</p>
        <p className="text-xs text-white font-medium">{ConditionTitle}</p>
      </div>
    </div>
  );
};

export default WeatherCondition;
