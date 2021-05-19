import { CurrentWeather } from "../src/pages/CurrentWeather";
import { Provider } from "react-redux";
import { store } from "./action-creation";
import { getWeatherAPI } from "./APIServise";
import { Header } from "../src/components/Header";
import { SirchPanel } from "./components/SirchPanel";
import { TimeNavigation } from "./components/TimeNavigation";

export function App() {
  getWeatherAPI();
  return (
    <Provider store={store}>
      <Header />
      <TimeNavigation />
      <SirchPanel />
      <CurrentWeather />
    </Provider>
  );
}
