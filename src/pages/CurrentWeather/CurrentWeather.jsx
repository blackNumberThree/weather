import { WeatherDisplay } from "../../components/WeatherDisplay";
import { connect } from "react-redux";

function createCurrentWeather({ weatherMap, timeMode }) {
  if (!weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <WeatherDisplay weatherMap={weatherMap} timeMode={timeMode} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.currentWeather,
    timeMode: state.timeMode,
  };
}
export let CurrentWeather = connect(mapStateToProps)(createCurrentWeather);
