import { bindActionCreators } from "redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reduser";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));

// export const add = (dispatch) => {
//   return (payload) =>
//     dispatch({
//       type: "addWeather",
//       payload: payload,
//     });
// };
export const add = (props) => {
  console.log(props);
  let weatherMap = {
    coord: props.coord,
    dt: props.dt,
    icon: props.weather["0"].icon,
    temp: props.main.temp,
    feels_like: props.main.feels_like,
    clouds: props.clouds.all,
    pressure: props.main.pressure,
    humidity: props.main.humidity,
    wind: props.wind.speed,
    windGust: props.wind.gust,
  };
  return {
    type: "addWeather",
    payload: weatherMap,
  };
};

export let dispathAdd = bindActionCreators(add, store.dispatch);
