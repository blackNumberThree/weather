import { WitherDisplay } from "../components/WeatherDisplay";
import { connect } from "react-redux";
function createCurrentWeather({ weatherMap }) {
  return (
    <>
      <WitherDisplay weatherMap={weatherMap} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap.currentWeather,
  };
}
export let CurrentWeather = connect(mapStateToProps)(createCurrentWeather);
