import { bindActionCreators } from "redux";
import { createStore } from "redux";
import { reducer } from "./reduser";

export const store = createStore(reducer);

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
const changeTimeMode = (timeMode) => {
  return {
    type: "changeTimeMode",
    payload: timeMode,
  };
};
const addWeatherMap = (weatherMap) => {
  return {
    type: "addWeather",
    payload: weatherMap,
  };
};

export const {
  dispatchAddWeather,
  dispatchChangeCityName,
  dispatchChangeCoord,
  dispatchChangeTimeMode,
} = bindActionCreators(
  {
    dispatchAddWeather: addWeatherMap,
    dispatchChangeCityName: changeCityName,
    dispatchChangeCoord: changeCoord,
    dispatchChangeTimeMode: changeTimeMode,
  },
  store.dispatch
);
