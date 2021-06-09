import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dispatchChangeCityName } from "../../action-creation";
import style from "./cityChosePanel.module.css";

function createCityChosePanel({ timeMode }) {
  function changeCity(event) {
    dispatchChangeCityName(event.target.innerText);
  }

  return (
    <div className={style.CityChosePanel}>
      <div className={style.cityChoosenMenu}>
        Выберете город <span className={style.buttonArrow}> </span>
        <div className={style.cityList}>
          <Link
            to={`/${timeMode}/49.96,36.32`}
            className={style.city}
            onClick={changeCity}
          >
            Харьков
          </Link>
          <Link
            to={`/${timeMode}/49.27,36.50`}
            className={style.city}
            onClick={changeCity}
          >
            Балаклея
          </Link>
          <Link
            to={`/${timeMode}/59.57,30.19`}
            className={style.city}
            onClick={changeCity}
          >
            Санкт-Петербург
          </Link>
          <Link
            to={`/${timeMode}/46.45,36.47`}
            className={style.city}
            onClick={changeCity}
          >
            Бердянск
          </Link>
          <Link
            to={`/${timeMode}/49.22,36.34`}
            className={style.city}
            onClick={changeCity}
          >
            Слобожанское
          </Link>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { timeMode: state.timeMode };
}
export let CityChosePanel = connect(mapStateToProps)(createCityChosePanel);
