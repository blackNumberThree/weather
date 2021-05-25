import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function CreateTimeNavigation({ coord: { latitude, longitude } }) {
  return (
    <div>
      <span>Прогноз на :</span>
      <br />
      <Link to={`/current/${latitude},${longitude}`}>сейчас</Link>
      <br />
      <Link to={`/hourly/${latitude},${longitude}`}>на два дня</Link>
      <br />
      <Link to={`/daily/${latitude},${longitude}`}>на семь дней</Link>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    coord: state.coord,
  };
}
export let TimeNavigation = connect(mapStateToProps)(CreateTimeNavigation);
