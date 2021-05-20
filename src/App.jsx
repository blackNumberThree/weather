import { DailyWeather } from "../src/pages/DailyWeather";
import { Provider } from "react-redux";
import { store } from "./action-creation";
import { getWeatherAPI } from "./APIServise";
import { Header } from "../src/components/Header";
import { SirchPanel } from "./components/SirchPanel";
import { TimeNavigation } from "./components/TimeNavigation";
import { useEffect } from "react";
export function App() {
  useEffect(getWeatherAPI, []);
  return (
    <Provider store={store}>
      <Header />
      <TimeNavigation />
      <SirchPanel />
      <DailyWeather />
    </Provider>
  );
}
