import { WitherDisplay } from "../components/WeatherDisplay";
import { WeatherBarElement } from "../components/WeatherBarElement";
import { connect } from "react-redux";
import { useState } from "react";

export function CreateHourlyWeather({ weatherMap, chosenTimeBar }) {
  let todayWeather = [...weatherMap];
  todayWeather.splice(24, 24);
  let tomorrowWeather = [...weatherMap];
  tomorrowWeather.splice(0, 24);
  let [currentWeatherDay, setCurrentWeather] = useState(todayWeather);
  function setTodayWeather() {
    setCurrentWeather(todayWeather);
  }

  function setTomorrowWeather() {
    setCurrentWeather(tomorrowWeather);
  }
  return (
    <>
      <div>
        <h3 onClick={setTodayWeather}>Погода на сегодня</h3>
      </div>
      <div>
        <h3 onClick={setTomorrowWeather}>Погода на завтра</h3>
      </div>
      <div>
        {currentWeatherDay.map((element, index) => (
          <WeatherBarElement key={element.dt} element={element} index={index} />
        ))}
      </div>
      <WitherDisplay weatherMap={weatherMap[chosenTimeBar]} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.hourlyWeather,
    chosenTimeBar: state.chosenTimeBar,
  };
}
export let HourlyWeather = connect(mapStateToProps)(CreateHourlyWeather);
