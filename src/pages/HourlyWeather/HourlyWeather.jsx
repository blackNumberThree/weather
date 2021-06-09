import { WeatherDisplay } from "../../components/WeatherDisplay";
import { BarElementHourly } from "../../components/BarElementHourly";
import { connect } from "react-redux";
import { useState } from "react";
import style from "./hourlyWeather.module.css";
import classNames from "classnames";

export function CreateHourlyWeather({ weatherMap, timeMode }) {
  let todayWeather, tomorrowWeather;

  if (weatherMap) {
    todayWeather = [...weatherMap];
    todayWeather.splice(24, 24);
    tomorrowWeather = [...weatherMap];
    tomorrowWeather.splice(0, 24);
  }
  let [currentWeatherDay, setCurrentWeather] = useState(todayWeather);
  let [chosenDay, setChosenDay] = useState(0);
  let [chosenBtn, setChosenBtn] = useState(0);

  function setTodayWeather() {
    setChosenBtn(0);
    setCurrentWeather(todayWeather);
  }
  function setTomorrowWeather() {
    setChosenBtn(1);
    setCurrentWeather(tomorrowWeather);
  }

  if (!weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <div className={style.choseDayBar}>
        <button
          className={classNames({ [style.buttonActive]: chosenBtn === 0 })}
          onClick={setTodayWeather}
        >
          Погода на сегодня
        </button>
        <button
          className={classNames({ [style.buttonActive]: chosenBtn === 1 })}
          onClick={setTomorrowWeather}
        >
          Погода на завтра
        </button>
      </div>
      <div className={style.barElementsHourly}>
        {currentWeatherDay.map((element, index) => (
          <BarElementHourly
            key={element.dt}
            element={element}
            index={index}
            setChosenDay={setChosenDay}
            chosenDay={chosenDay}
          />
        ))}
      </div>
      {
        <WeatherDisplay
          weatherMap={weatherMap[chosenDay]}
          timeMode={timeMode}
        />
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.hourlyWeather,
    timeMode: state.timeMode,
  };
}
export let HourlyWeather = connect(mapStateToProps)(CreateHourlyWeather);
