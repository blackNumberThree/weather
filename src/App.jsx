import { getGeodata, sendRequestToAPI } from "./APIServise";
import { Header } from "../src/components/Header";
import { SirchPanel } from "./components/SirchPanel";
import { TimeNavigation } from "./components/TimeNavigation";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { CurrentWeather } from "./pages/CurrentWeather";
import { HourlyWeather } from "./pages/HourlyWeather";
import { DailyWeather } from "./pages/DailyWeather";
import { useEffect } from "react";
import { compose } from "redux";
export function CreateApp({ coord, location }) {
  useEffect(() => {
    if (location.pathname !== "/") {
      let newCoord = location.pathname
        .match(/\d\d.\d\d.\d\d.\d\d$/)[0]
        .split(",");
      sendRequestToAPI(newCoord[0], newCoord[0]);
    }
  });
  useEffect(() => {
    if (!coord.latitude) {
      getGeodata();
    }
  });
  
  if (!coord.latitude) {
    return <h1>Hello</h1>;
  }

  return (
    <>
      <Header />
      <TimeNavigation />
      <SirchPanel />
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

