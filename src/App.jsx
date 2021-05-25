import { getGeodata, hundlerURLRequest } from "./APIServise";
import { Header } from "../src/components/Header";
import { SirchPanel } from "./components/SirchPanel";
import { TimeNavigation } from "./components/TimeNavigation";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { CurrentWeather } from "./pages/CurrentWeather";
import { HourlyWeather } from "./pages/HourlyWeather";
import { DailyWeather } from "./pages/DailyWeather";
import { useEffect } from "react";

export function CreateApp({ coord: { latitude, longitude } }) {
  useEffect(() => {
    if (!latitude) {
      getGeodata();
    }
  });
  if (!latitude) {
    return <h1>Hello</h1>;
  }

  return (
    <>
      <Header />
      <TimeNavigation />
      <SirchPanel />
      <Route path="/" exact render={() => <CurrentWeather />} />
      <Route
        path="/current/:coord"
        render={({ match }) => {
          let coord = match.params.coord.split(",");
          hundlerURLRequest(
            { newLatitude: coord[0], newLongitude: coord[1] },
            "current"
          );
          return <CurrentWeather />;
        }}
      />
      <Route
        path="/hourly/:coord"
        render={({ match }) => {
          let coord = match.params.coord.split(",");
          hundlerURLRequest(
            { newLatitude: coord[0], newLongitude: coord[1] },
            "hourly"
          );
          return <HourlyWeather />;
        }}
      />
      <Route
        path="/daily/:coord"
        render={({ match }) => {
          let coord = match.params.coord.split(",");
          hundlerURLRequest(
            { newLatitude: coord[0], newLongitude: coord[1] },
            "daily"
          );
          return <DailyWeather />;
        }}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    coord: state.coord,
  };
}
export let App = connect(mapStateToProps)(CreateApp);
