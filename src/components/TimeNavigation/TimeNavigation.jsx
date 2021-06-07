import { Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./timeNavigation.module.css";

export function CreateTimeNavigation({ coord: { latitude, longitude } }) {
  return (
    <div className={style.timeWrapper}>
      <div className={style.TimeNavigation}>
        <span className={style.text}>Прогноз на :</span>
        <div className={style.shadowArrow}></div>
        <Link to={`/current/${latitude},${longitude}`}>
          <span className={`${style.timeItem} ${style.border} ${style.pl}`}>
            сейчас
          </span>
        </Link>
        <Link to={`/hourly/${latitude},${longitude}`}>
          <span className={`${style.timeItem} ${style.border}`}>
            на два дня
          </span>
        </Link>
        <Link to={`/daily/${latitude},${longitude}`}>
          <span className={style.timeItem}>на семь дней</span>
        </Link>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    coord: state.coord,
  };
}
export let TimeNavigation = connect(mapStateToProps)(CreateTimeNavigation);
