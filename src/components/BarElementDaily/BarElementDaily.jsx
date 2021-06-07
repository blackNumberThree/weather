import { setCurrentIcon } from "../../importImg";

export function BarElementDaily({
  element: { dt, icon, temp },
  index,
  setChosenDay,
}) {
  function changeChosenElement() {
    setChosenDay(index);
  }
  return (
    <div onClick={changeChosenElement}>
      <span>
        {new Date(dt * 1000).getDate() + " : " + new Date(dt * 1000).getHours()}
      </span>
      <img src={setCurrentIcon(icon)} alt="icon" />
      <span>{temp[0]}</span>
    </div>
  );
}
