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
  let latitude = Number(coord[0]).toFixed(2);
  let longitude = Number(coord[1]).toFixed(2);
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
const changeChosenTimeBar = (chosenTimeBar) => {
  return {
    type: "changeChosenTimeBar",
    payload: chosenTimeBar,
  };
};

export const {
  dispatchAddWeather,
  dispatchChangeCityName,
  dispatchChangeCoord,
  dispatchChangeTimeMode,
  dispatchChangeChosenTimeBar,
} = bindActionCreators(
  {
    dispatchAddWeather: addWeatherMap,
    dispatchChangeCityName: changeCityName,
    dispatchChangeCoord: changeCoord,
    dispatchChangeTimeMode: changeTimeMode,
    dispatchChangeChosenTimeBar: changeChosenTimeBar,
  },
  store.dispatch
);
