import { dispatchChangeChosenTimeBar } from "../action-creation";

export function WeatherBarElement({ element: { dt, icon, temp }, index }) {
  function changeChosenElement() {
    dispatchChangeChosenTimeBar(index);
  }
  return (
    <div onClick={changeChosenElement}>
      <span>
        {new Date(dt * 1000).getDate() + " : " + new Date(dt * 1000).getHours()}
      </span>
      <img src={icon} alt="icon" />
      <span>{temp}</span>
    </div>
  );
}
