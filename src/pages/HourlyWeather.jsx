import { WitherDisplay } from "../components/WeatherDisplay";
import { WeatherBarElement } from "../components/WeatherBarElementHourly";
import { connect } from "react-redux";
import { useState } from "react";

export function CreateHourlyWeather({ weatherMap, chosenTimeBar }) {
  let todayWeather, tomorrowWeather;

  if (weatherMap) {
    todayWeather = [...weatherMap];
    todayWeather.splice(24, 24);
    tomorrowWeather = [...weatherMap];
    tomorrowWeather.splice(0, 24);
  }
  let [currentWeatherDay, setCurrentWeather] = useState(weatherMap);
  let [chosenDay, setChosenDay] = useState(0);
  function setTodayWeather() {
    setCurrentWeather(todayWeather);
  }
  function setTomorrowWeather() {
    setCurrentWeather(tomorrowWeather);
  }

  if (!weatherMap) {
    return <h1>Hello</h1>;
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
          <WeatherBarElement
            key={element.dt}
            element={element}
            index={index}
            setChosenDay={setChosenDay}
          />
        ))}
      </div>
      {<WitherDisplay weatherMap={weatherMap[chosenDay]} />}
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
