import { WitherDisplay } from "../components/WeatherDisplay";
import { WeatherBarElement } from "../components/WeatherBarElement";
import { connect } from "react-redux";

export function CreateDailyWeather({ weatherMap, chosenTimeBar }) {
  return (
    <>
      <div>
        {weatherMap.map((element, index) => (
          <WeatherBarElement key={element.dt} element={element} index={index} />
        ))}
      </div>
      <WitherDisplay weatherMap={weatherMap[chosenTimeBar]} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.dailyWeather,
    chosenTimeBar: state.chosenTimeBar,
  };
}
export let DailyWeather = connect(mapStateToProps)(CreateDailyWeather);
