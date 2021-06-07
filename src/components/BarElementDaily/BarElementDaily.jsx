import { setCurrentIcon } from "../../importImg";
import style from "./barElementDaily.module.css";
import classNames from "classnames";
export function BarElementDaily({ element, index, setChosenDay, chosenDay }) {
  let { dt, icon, temp, description } = element;
  function changeChosenElement() {
    setChosenDay(index);
  }
  let weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  let day = new Date(dt * 1000);
  let dayOfWeek = weekday[day.getDay()];

  return (
    <div
      className={` ${classNames({ [style.chosen]: index === chosenDay })} ${
        style.element
      }`}
      onClick={changeChosenElement}
    >
      <div className={style.elementRow}>
        <span className={style.elementDay}>{dayOfWeek}</span>
        <span className={style.numberOfDay}>
          {new Date(dt * 1000).getDate() + "." + new Date(dt * 1000).getHours()}
        </span>
      </div>
      <span className={style.description}>{description}</span>
      <img src={setCurrentIcon(icon)} alt="icon" />
      <div className={style.elementRow}>
        <span>{Math.round(temp[0])}C°</span> -
        <span>{Math.round(temp[1])}C°</span>
      </div>
    </div>
  );
}
