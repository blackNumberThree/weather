import {
  dispatchAddWeather,
  dispatchChangeCoord,
  store,
} from "./action-creation";

export async function sendRequestToAPI() {
  let currentStore = store.getState();
  let {
    coord: { latitude, longitude },
    timeMode,
  } = currentStore;
  const urlAddress = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${timeMode}&appid=9c1ff6247b1e536d7d7e76b09597a61b&units=metric`;

  const response = await fetch(urlAddress);
  if (!response.ok) {
    throw new Error("We couldn't  send fetch request");
  }
  const json = await response.json();

  dispatchAddWeather(json);
}

export function getWeatherAPI() {

  if (store.getState().city) {
    sendRequestToAPI();
  } else {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(postion) {
      let { longitude, latitude } = postion.coords;
      dispatchChangeCoord([latitude, longitude]);
      sendRequestToAPI();
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }
}
