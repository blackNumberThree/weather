const startState = {
  city: "",
  coord: { latitude: 0, longitude: 0 },
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
  },
};

export const reducer = function (state = startState, { type, payload }) {
  let { city, timeMode, coord, weatherMap } = state;
  switch (type) {
    case "addWeather":
      return { city, coord, timeMode, weatherMap: payload };
    case "changeCityName":
      return { city: payload, coord, timeMode, weatherMap };
    case "changeCoord":
      return { city, coord: payload, timeMode, weatherMap };
    default:
      return state;
  }
};
