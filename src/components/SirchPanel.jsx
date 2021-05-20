import { connect } from "react-redux";
import {
  dispatchChangeCityName,
  dispatchChangeCoord,
} from "../action-creation";
import { sendRequestToAPI } from "../APIServise";

function createSirchPanel() {
  function changeChosenCity(event) {
    const cityIndex = event.target.options.selectedIndex;
    const cityName = event.target[cityIndex].innerText;
    const coord = event.target[cityIndex].value.split(",");
    dispatchChangeCityName(cityName);
    dispatchChangeCoord(coord[0], coord[1]);
    sendRequestToAPI();
  }
  return (
    <div>
      <select onChange={changeChosenCity} defaultValue="Выбор города">
        <option disabled>Выбор города</option>
        <option value="49.96,36.32">Харьков</option>
        <option value="49.27,36.50">Балаклея</option>
        <option value="59.57,30.19">Санкт-Петербург</option>
        <option value="46.45,36.47">Бердянск</option>
        <option value="49.22,36.34">Слобожанское</option>
      </select>
    </div>
  );
}

function mapStateToProps(state) {
  return { city: state.city };
}
export let SirchPanel = connect(mapStateToProps)(createSirchPanel);
