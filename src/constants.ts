const ICON_BASE_URL = "https://openweathermap.org/img/wn/";
export const getIconUrl = (iconId: string) => {
  return `${ICON_BASE_URL}${iconId}@4x.png`;
};
