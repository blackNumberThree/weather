import { dispatchAddWeather, dispatchChangeCoord } from "./action-creation";

export async function sendRequestToAPI(latitude, longitude) {
  dispatchAddWeather(false);
  const urlAddress = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,allert&appid=9c1ff6247b1e536d7d7e76b09597a61b&units=metric&lang=ru`;
  const response = await fetch(urlAddress);
  if (!response.ok) {
    throw new Error("We couldn't  send fetch request");
  }
  const json = await response.json();
  dispatchAddWeather(convertWeatherMap(json));
  return json;
}

export function getGeoData() {
  function success(position) {
    let { latitude, longitude } = position.coords;
    latitude = latitude.toFixed(2);
    longitude = longitude.toFixed(2);
    sendRequestToAPI(latitude, longitude).then(() =>
      dispatchChangeCoord([latitude, longitude])
    );
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    let latitude = 49.96;
    let longitude = 36.32;
    sendRequestToAPI(latitude, longitude).then(() =>
      dispatchChangeCoord([latitude, longitude])
    );
    alert("It is impossible to get your geodata");
  }
  const option = { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 };

  navigator.geolocation.getCurrentPosition(success, error, option);
}

function convertWeatherMap({ current, daily, hourly }) {
  function writeCapitalize(str) {
    return str.toUpperCase()[0] + str.slice(1);
  }
  let convertedCurrent = {
    dt: current.dt,
    icon: current.weather["0"].icon,
    temp: current.temp,
    feels_like: current.feels_like,
    clouds: current.clouds,
    pressure: current.pressure,
    humidity: current.humidity,
    windSpeed: current.wind_speed,
    windGust: current.wind_gust,
    uvi: current.uvi,
    description: writeCapitalize(current.weather["0"].description),
  };
  let convertedHourly = hourly.map((element) => {
    return {
      dt: element.dt,
      icon: element.weather["0"].icon,
      temp: element.temp,
      feels_like: element.feels_like,
      clouds: element.clouds,
      pressure: element.pressure,
      humidity: element.humidity,
      windSpeed: element.wind_speed,
      windGust: element.wind_gust,
      uvi: element.uvi,
      description: writeCapitalize(element.weather["0"].description),
    };
  });
  let convertedDaily = daily.map((element) => {
    return {
      dt: element.dt,
      icon: element.weather["0"].icon,
      temp: [element.temp.day, element.temp.night],
      feels_like: [element.feels_like.day, element.feels_like.night],
      clouds: element.clouds,
      pressure: element.pressure,
      humidity: element.humidity,
      windSpeed: element.wind_speed,
      windGust: element.wind_gust,
      uvi: element.uvi,
      description: writeCapitalize(element.weather["0"].description),
    };
  });

  return {
    currentWeather: convertedCurrent,
    hourlyWeather: convertedHourly,
    dailyWeather: convertedDaily,
  };
}
