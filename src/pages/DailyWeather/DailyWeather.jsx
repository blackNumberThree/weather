import { BarElementDaily } from "../../components/BarElementDaily";
import { connect } from "react-redux";
import { WeatherDisplay } from "../../components/WeatherDisplay";
import { useState } from "react";
import style from "./DailyWeather.module.css";

export function CreateDailyWeather({ weatherMap, timeMode }) {
  let [chosenDay, setChosenDay] = useState(0);
  if (!weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <div className={style.dailyWeatherBar}>
        {weatherMap.map((element, index) => (
          <BarElementDaily
            key={element.dt}
            element={element}
            index={index}
            setChosenDay={setChosenDay}
            chosenDay={chosenDay}
          />
        ))}
      </div>
      <WeatherDisplay weatherMap={weatherMap[chosenDay]} timeMode={timeMode} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.dailyWeather,
    timeMode: state.timeMode,
  };
}
export let DailyWeather = connect(mapStateToProps)(CreateDailyWeather);
