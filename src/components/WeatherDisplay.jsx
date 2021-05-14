import { connect } from "react-redux";

function createWitherDisplay({ weatherMap }) {
  return (
    <ol>
      <li>иконка {weatherMap.icon}</li>
      <li>температура {weatherMap.temp}</li>
      <li>чувствуется как {weatherMap.feels_like}</li>
      <li>облачность {weatherMap.clouds}</li>
      <li>давление {weatherMap.pressure}</li>
      <li>влажность {weatherMap.humidity}</li>
      <li>ветер {weatherMap.wind}</li>
      <li>порывы ветра {weatherMap.windGust}</li>
    </ol>
  );
}
function mapStateToProps(state) {
  return { weatherMap: state.weatherMap };
}
export let WitherDisplay = connect(mapStateToProps)(createWitherDisplay);
