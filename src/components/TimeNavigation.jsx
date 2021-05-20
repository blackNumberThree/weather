import { dispatchChangeTimeMode } from "../action-creation";

export function TimeNavigation() {
  return (
    <div>
      <span>Прогноз на :</span>
      <button
        className="minutely,hourly,daily"
        onClick={dispatchChangeTimeMode}
      >
        сейчас
      </button>
      <button
        className="minutely,current,daily"
        onClick={dispatchChangeTimeMode}
      >
        на два дня
      </button>
      <button
        className="minutely,hourly,current"
        onClick={dispatchChangeTimeMode}
      >
        на семь дней
      </button>
    </div>
  );
}
