import { WeatherBarElement } from "../components/WeatherBarElement";
import { connect } from "react-redux";
import { WitherDisplay } from "../components/WeatherDisplay";

export function CreateDailyWeather({ weatherMap }) {
  if (!weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <div>
        {weatherMap.map((element, index) => (
          <WeatherBarElement key={element.dt} element={element} index={index} />
        ))}
      </div>
      <WitherDisplay weatherMap={weatherMap[0]} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.dailyWeather,
  };
}
export let DailyWeather = connect(mapStateToProps)(CreateDailyWeather);
