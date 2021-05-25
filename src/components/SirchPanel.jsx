import { connect } from "react-redux";
import { Link } from "react-router-dom";

function createSirchPanel({ timeMode }) {
  return (
    <div>
      <br />
      <Link to={`/${timeMode}/49.96,36.32`}>Харьков</Link>
      <Link to={`/${timeMode}/49.27,36.50`}>Балаклея</Link>
      <Link to={`/${timeMode}/59.57,30.19`}>Санкт-Петербург</Link>
      <Link to={`/${timeMode}/46.45,36.47`}>Бердянск</Link>
      <Link to={`/${timeMode}/49.22,36.34`}>Слобожанское</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return { timeMode: state.timeMode };
}
export let SirchPanel = connect(mapStateToProps)(createSirchPanel);
