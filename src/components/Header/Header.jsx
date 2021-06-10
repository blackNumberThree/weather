import { connect } from "react-redux";
import { Loader } from "../Loader";
import style from "./header.module.css";

export function createHeader({ coord, city }) {
  let cityLabel = (
    <span>
      в городе: <span className="city">{city}</span>
    </span>
  );
  let coordLabel = (
    <span>
      <span>
        по координатам ш. <span className="coordinate">{coord.latitude}</span> °
        д. <span className="coordinate">{coord.longitude}</span> °
      </span>
    </span>
  );
  const changePart = city ? cityLabel : coordLabel;
  let today;
  let todayHourMinutes;
  function getTime() {
    let objToday = new Date();
    let weekday = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    let dayOfWeek = weekday[objToday.getDay()];

    let dayOfMonth =
      objToday.getDate() < 10 ? "0" + objToday.getDate() : objToday.getDate();

    let months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    let curMonth = months[objToday.getMonth()];
    let curHour =
      objToday.getHours() < 10
        ? "0" + objToday.getHours()
        : objToday.getHours();

    let curMinute =
      objToday.getMinutes() < 10
        ? "0" + objToday.getMinutes()
        : objToday.getMinutes();
    todayHourMinutes = curHour + ":" + curMinute + " ";
    today = dayOfWeek + " " + dayOfMonth + "е " + curMonth + " ";
  }
  getTime();
  setTimeout(getTime, 60000);
  if (!coord.latitude) {
    return <Loader />;
  }
  return (
    <div className={style.header}>
      <h2 className={style.time}>
        <span className={style.todayHourMinutes}>{todayHourMinutes}</span>
        {today}
      </h2>
      <h2 className={style.coord}>Погода {changePart}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return { coord: state.coord, city: state.city };
}
export let Header = connect(mapStateToProps)(createHeader);
