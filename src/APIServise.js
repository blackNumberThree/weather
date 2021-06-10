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

  function destructuringWeatherMap({
    dt,
    weather,
    temp,
    feels_like,
    clouds,
    pressure,
    humidity,
    wind_speed,
    uvi,
  }) {
    return {
      dt,
      icon: weather["0"].icon,
      temp,
      feels_like,
      clouds,
      pressure,
      humidity,
      windSpeed: wind_speed,
      uvi,
      description: writeCapitalize(weather["0"].description),
    };
  }

  let convertedCurrent = destructuringWeatherMap(current);
  let filterList = hourly.filter((element, index) => !(index % 2));
  let convertedHourly = filterList.map((element) => {
    return destructuringWeatherMap(element);
  });

  let convertedDaily = daily.map((element) => {
    let newTemp = [element.temp.day, element.temp.night];
    let new_feels_like = [element.feels_like.day, element.feels_like.night];

    element.temp = newTemp;
    element.feels_like = new_feels_like;

    return destructuringWeatherMap(element);
  });

  return {
    currentWeather: convertedCurrent,
    hourlyWeather: convertedHourly,
    dailyWeather: convertedDaily,
  };
}
