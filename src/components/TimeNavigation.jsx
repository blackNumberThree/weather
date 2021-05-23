import { Link } from "react-router-dom";
export function TimeNavigation() {
  return (
    <div>
      <span>Прогноз на :</span>
      <br />
      <Link to="/current">сейчас</Link>
      <br />
      <Link to="/hourly">на два дня</Link>
      <br />
      <Link to="daily">на семь дней</Link>
    </div>
  );
}
