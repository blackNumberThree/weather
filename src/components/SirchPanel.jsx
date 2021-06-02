import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dispatchChangeCityName } from "../action-creation";

function createSirchPanel({ timeMode }) {
  function changeCity(event) {
    dispatchChangeCityName(event.target.innerText);

  }
  return (
    <div className="SirchPanel">
      <Link to={`/${timeMode}/49.96,36.32`}>
        <span onClick={changeCity} className="city">
          Харьков
        </span>
      </Link>
      <Link to={`/${timeMode}/49.27,36.50`}>
        <span className="city" onClick={changeCity}>
          Балаклея
        </span>
      </Link>
      <Link to={`/${timeMode}/59.57,30.19`}>
        <span onClick={changeCity} className="city">
          Санкт-Петербург
        </span>
      </Link>
      <Link to={`/${timeMode}/46.45,36.47`}>
        <span className="city" onClick={changeCity}>
          Бердянск
        </span>
      </Link>
      <Link to={`/${timeMode}/49.22,36.34`}>
        <span onClick={changeCity} className="city">
          Слобожанское
        </span>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return { timeMode: state.timeMode };
}
export let SirchPanel = connect(mapStateToProps)(createSirchPanel);
