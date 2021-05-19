import {
  dispathAddWeather,
  dispathChangeCoord,
  store,
} from "./action-creation";

export async function sendRequestToAPI(latitude, longitude) {
  const fullUrlAddress = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=9c1ff6247b1e536d7d7e76b09597a61b&units=metric`;
  const response = await fetch(fullUrlAddress);
  if (!response.ok) {
    throw new Error("We couldn't  send fetch request");
  }
  const json = await response.json();

  dispathChangeCoord([latitude, longitude]);
  dispathAddWeather(json);
}

export function getWeatherAPI() {
  let currentStore = store.getState();
  let { coord, city } = currentStore.coord;

  if (city) {
    let { latitude, longitude } = coord;
    sendRequestToAPI(latitude, longitude);
  } else {
    function success(postion) {
      let { longitude, latitude } = postion.coords;
      sendRequestToAPI(latitude.toFixed(2), longitude.toFixed(2));
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
