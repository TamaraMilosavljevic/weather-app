type Condition = "humidity" | "windspeed";

export interface WeatherConditionProps {
  name: Condition;
  value: number;
  unit: "km/h" | "%";
}
