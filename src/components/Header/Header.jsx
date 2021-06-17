import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Loader } from "../Loader";
import style from "./header.module.css";

export function CreateHeader({ coord, city }) {
  let labelWithCity = (
    <span>
      в городе: <span className="city">{city}</span>
    </span>
  );
  let LabelWithCoordinate = (
    <span>
      <span>
        по координатам ш. <span className="coordinate">{coord.latitude}</span> °
        д. <span className="coordinate">{coord.longitude}</span> °
      </span>
    </span>
  );
  let today;
  let [hourAndMinutes, setHourAndMinutes] = useState(getTime());
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

    today = dayOfWeek + " " + dayOfMonth + "е " + curMonth + " ";
    return curHour + ":" + curMinute + " ";
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      setHourAndMinutes(getTime());
    }, 60000);
    return () => clearTimeout(timer);
  });

  if (!coord.latitude) {
    return <Loader />;
  }

  return (
    <div className={style.header}>
      <h2 className={style.time}>
        <span className={style.hourAndMinutes}>{hourAndMinutes}</span>
        <span>{today}</span>
      </h2>
      <h2 className={style.coord}>
        Погода {city ? labelWithCity : LabelWithCoordinate}
      </h2>
    </div>
  );
}

function mapStateToProps(state) {
  return { coord: state.coord, city: state.city };
}
export let Header = connect(mapStateToProps)(CreateHeader);
