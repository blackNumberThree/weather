import { getGeodata } from "./APIServise";
import { Header } from "../src/components/Header";
import { SirchPanel } from "./components/SirchPanel";
import { TimeNavigation } from "./components/TimeNavigation";
import { HourlyWeather } from "./pages/HourlyWeather";
import { CurrentWeather } from "./pages/CurrentWeather";
import { DailyWeather } from "./pages/DailyWeather";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { sendRequestToAPI } from "./APIServise";
import { useEffect } from "react";
import { store } from "./action-creation";

export function CreateApp() {
  useEffect(() => {
    getGeodata();
    sendRequestToAPI();
  }, []);

  if (!store.getState().weatherMap) {
    return <h1>Hello</h1>;
  }
  return (
    <>
      <Header />
      <TimeNavigation />
      <SirchPanel />
      <Route path="/current" component={CurrentWeather} />
      <Route path="/hourly" component={HourlyWeather} />
      <Route path="/daily" component={DailyWeather} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    weatherMap: state.weatherMap,
  };
}
export let App = connect(mapStateToProps)(CreateApp);
// if (!coord.latitude) {
//   getGeodata();
//   sendRequestToAPI();
//   return <h1>Hello</h1>;
// }
