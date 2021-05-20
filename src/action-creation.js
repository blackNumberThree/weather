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
const changeTimeMode = (event) => {
  const timeMode = event.target.className;
  return {
    type: "changeTimeMode",
    payload: timeMode,
  };
};
const addWeatherMap = (prop) => {
  let carrentWeatherData = prop?.hourly || prop?.daily || [prop?.current];
  let weatherMap = carrentWeatherData.map((element) => {
    return {
      dt: element.dt,
      icon: element.weather["0"].icon,
      temp: element.temp?.day || element.temp,
      feels_like: element.feels_like?.day || element.feels_like,
      clouds: element.clouds,
      pressure: element.pressure,
      humidity: element.humidity,
      windSpeed: element.wind_speed,
      windGust: element.wind_gust,
      uvi: element.uvi,
    };
  });

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
