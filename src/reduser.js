const startState = {
  sity: "",
  timeMode: "",
  weatherMap: {
    dt: 0,
    icon: 0,
    temp: 0,
    feels_like: 0,
    clouds: 0,
    pressure: 0,
    humidity: 0,
    wind: 0,
    windGust: 0,
    coord: { lon: 0, lat: 0 },
  },
};

export const reducer = function (state = startState, { type, payload }) {
  let { sity, timeMode } = state;
  switch (type) {
    case "addWeather":
      return { sity, timeMode, weatherMap: payload };
    default:
      return state;
  }
};
