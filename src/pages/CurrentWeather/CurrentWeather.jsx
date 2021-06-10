import { WeatherDisplay } from "../../components/WeatherDisplay";
import { connect } from "react-redux";
import { Loader } from "../../components/Loader";

function createCurrentWeather({ weatherMap, timeMode }) {
  if (!weatherMap) {
    return <Loader />;
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
