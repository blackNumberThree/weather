import { setCurrentIcon } from "../../service/importImg";
import style from "./barElementHourly.module.css";
import classNames from "classnames";

export function BarElementHourly({ element, index, setChosenDay, chosenDay }) {
  let { dt, icon, temp } = element;
  let weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  let hours = new Date(dt * 1000).getHours();
  let dayOfWeek = weekday[new Date(dt * 1000).getDay()];

  function changeChosenElement() {
    setChosenDay(index);
  }
  return (
    <div
      className={` ${classNames({ [style.chosen]: index === chosenDay })} ${
        style.element
      }`}
      onClick={changeChosenElement}
    >
      <div className={style.elementRow}>
        <span className={style.dayOfWeek}>{dayOfWeek}</span>
        <span>{hours}:00</span>
      </div>
      <img src={setCurrentIcon(icon)} alt="icon" />
      <span>{temp} C°</span>
    </div>
  );
}
