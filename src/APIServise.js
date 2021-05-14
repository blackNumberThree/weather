import { dispathAdd } from "./action-creation";
const sity = "";

let options = { enableHighAccuracy: true };
function success(pos) {
  let latitude = pos.coords.latitude.toFixed(2);
  let longitude = pos.coords.longitude.toFixed(2);
  let urlAdress = `https:/api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9c1ff6247b1e536d7d7e76b09597a61b&units=metric`;
  getWeahterAPI(urlAdress);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export async function getWeahterAPI(urlAdress) {
  const response = await fetch(urlAdress);

  if (!response.ok) {
    throw new Error("We couldn't  send fetch request");
  }
  const json = await response.json();
  dispathAdd(json);
}

navigator.geolocation.getCurrentPosition(success, error, options);
