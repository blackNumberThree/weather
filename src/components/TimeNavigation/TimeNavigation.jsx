import { Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./timeNavigation.module.css";
import classNames from "classnames";

export function CreateTimeNavigation({
  coord: { latitude, longitude },
  timeMode,
}) {
  return (
    <div className={style.timeWrapper}>
      <div className={style.TimeNavigation}>
        <span className={style.text}>Прогноз на :</span>
        <div className={style.shadowArrow}></div>
        <Link to={`/current/${latitude},${longitude}`}>
          <span
            className={`${classNames({
              [style.timeItemActive]: timeMode === "current",
            })} ${style.timeItemFirst} `}
          >
            сейчас
          </span>
        </Link>
        <Link to={`/hourly/${latitude},${longitude}`}>
          <span
            className={`${classNames({
              [style.timeItemActive]: timeMode === "hourly",
            })}  ${style.timeItemSecond}`}
          >
            на два дня
          </span>
        </Link>
        <Link to={`/daily/${latitude},${longitude}`}>
          <span
            className={`${classNames({
              [style.timeItemActive]: timeMode === "daily",
            })}  ${style.timeItemThird}`}
          >
            на семь дней
          </span>
        </Link>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    coord: state.coord,
    timeMode: state.timeMode,
  };
}
export let TimeNavigation = connect(mapStateToProps)(CreateTimeNavigation);
