import { connect } from "react-redux";
export function createHeader({ coord }) {
  return <h1>Погода {`по координатам ш. ${coord.lon}° д. ${coord.lat}°`}</h1>;
}

function mapStateToProps(state) {
  return { coord: state.weatherMap.coord };
}
export let Header = connect(mapStateToProps)(createHeader);
