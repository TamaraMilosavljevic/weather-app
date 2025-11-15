import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

interface PropertyProps {
  name: string;
  value: string;
}
const propertyIcons: Record<string, string> = {
  Humidity: humidity,
  "Wind Speed": wind,
};

const Property: React.FC<PropertyProps> = ({ name, value }) => {
  const icon = propertyIcons[name];
  return (
    <div className="flex flex-row justify-center align-center gap-3">
      <div className="text-white">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <p className="text-2xl text-white font-medium">{value}</p>
        <p className="text-xs text-white font-medium">{name}</p>
      </div>
    </div>
  );
};

export default Property;
