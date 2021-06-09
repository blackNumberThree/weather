import { getGeoData, sendRequestToAPI } from "./APIServise";
import { dispatchChangeTimeMode } from "./action-creation";
import { Header } from "../src/components/Header";
import { CityChosePanel } from "./components/CityChosePanel";
import { TimeNavigation } from "./components/TimeNavigation";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { CurrentWeather } from "./pages/CurrentWeather";
import { HourlyWeather } from "./pages/HourlyWeather";
import { DailyWeather } from "./pages/DailyWeather";
import { useEffect } from "react";
import { compose } from "redux";
import "./css/global.css";
export function CreateApp({ coord, location }) {
  useEffect(() => {
    if (location.pathname !== "/") {
      let newCoord = location.pathname
        .match(/\d\d.\d\d.\d\d.\d\d$/)[0]
        .split(",");
      sendRequestToAPI(newCoord[0], newCoord[0]);
      if (location.pathname.indexOf("current") !== -1) {
        dispatchChangeTimeMode("current");
      }
      if (location.pathname.indexOf("hourly") !== -1) {
        dispatchChangeTimeMode("hourly");
      }
      if (location.pathname.indexOf("daily") !== -1) {
        dispatchChangeTimeMode("daily");
      }
    }
  });
  useEffect(() => {
    if (!coord.latitude) {
      getGeoData();
    }
  });

  if (!coord.latitude) {
    return <h1>Hello</h1>;
  }

  return (
    <>
      <Header />
      <TimeNavigation />
      <CityChosePanel />
      <Route path="/" exact component={CurrentWeather} />
      <Route path="/current" component={CurrentWeather} />
      <Route path="/hourly" component={HourlyWeather} />
      <Route path="/daily" component={DailyWeather} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    coord: state.coord,
  };
}

export let App = compose(withRouter, connect(mapStateToProps))(CreateApp);
