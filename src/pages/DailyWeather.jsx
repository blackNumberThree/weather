import { BarElementDaily } from "../components/BarElementDaily";
import { connect } from "react-redux";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { useState } from "react";

export function CreateDailyWeather({ weatherMap, chosenTimeBar }) {
  let [chosenDay, setChosenDay] = useState(0);
  if (!weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <div>
        {weatherMap.map((element, index) => (
          <BarElementDaily
            key={element.dt}
            element={element}
            index={index}
            setChosenDay={setChosenDay}
          />
        ))}
      </div>
      <WeatherDisplay weatherMap={weatherMap[chosenDay]} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.dailyWeather,
  };
}
export let DailyWeather = connect(mapStateToProps)(CreateDailyWeather);
