import { connect } from "react-redux";
export function createHeader({ coord, city }) {
  const changePart = city
    ? `в городе ${city}`
    : `по координатам ш. ${coord.longitude}° д. ${coord.latitude}°`;
  return <h1>Погода {changePart}</h1>;
}

function mapStateToProps(state) {
  return { coord: state.coord, city: state.city };
}
export let Header = connect(mapStateToProps)(createHeader);
