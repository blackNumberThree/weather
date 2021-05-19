import { bindActionCreators } from "redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reduser";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));

const changeCityName = (cityName) => {
  return {
    type: "changeCityName",
    payload: cityName,
  };
};
const changeCoord = (coord) => {
  let latitude = coord[0];
  let longitude = coord[1];
  return {
    type: "changeCoord",
    payload: { latitude, longitude },
  };
};
const addWeatherMap = ({ current }) => {
  console.log(current);
  let weatherMap = {
    dt: current.dt,
    icon: current.weather["0"].icon,
    temp: current.temp,
    feels_like: current.feels_like,
    clouds: current.clouds,
    pressure: current.pressure,
    humidity: current.humidity,
    wind: current.speed,
    uvi: current.uvi,
  };
  return {
    type: "addWeather",
    payload: weatherMap,
  };
};

export const dispathAddWeather = bindActionCreators(
  addWeatherMap,
  store.dispatch
);
export const dispathChangeCityName = bindActionCreators(
  changeCityName,
  store.dispatch
);
export const dispathChangeCoord = bindActionCreators(
  changeCoord,
  store.dispatch
);
