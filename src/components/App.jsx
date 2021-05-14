import { store } from "../action-creation";
import { Provider } from "react-redux";
import { WitherDisplay } from "./WeatherDisplay";
import { Header } from "./Header";

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <WitherDisplay />
    </Provider>
  );
}
