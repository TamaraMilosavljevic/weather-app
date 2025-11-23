type Condition = "humidity" | "windspeed";

export interface WeatherConditionProps {
  name: Condition;
  value: string;
}
