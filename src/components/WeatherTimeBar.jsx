// import { useState } from "react";
// import { WeatherBarElement } from "./WeatherBarElement";

// export function WeatherTimeBar({ weatherMap }) {
//   let todayWeather = [...weatherMap];
//   todayWeather.splice(24, 24);
//   let tomorrowWeather = [...weatherMap];

//   tomorrowWeather.splice(0, 24);
//   console.log(todayWeather);

//   let [currentWeatherDay, setCurrentWeather] = useState(todayWeather);

//   function setTodayWeather() {
//     setCurrentWeather(todayWeather);
//   }

//   function setTomorrowWeather() {
//     setCurrentWeather(tomorrowWeather);
//   }

//   return (
//     <>
//       <div onClick={setTodayWeather}>
//         <h3>Погода на сегодня</h3>
//       </div>
//       <div onClick={setTomorrowWeather}>
//         <h3>Погода на завтра</h3>
//       </div>
//       <div>
//         {currentWeatherDay.map((element, index) => (
//           <WeatherBarElement key={element.dt} element={element} index={index} />
//         ))}
//       </div>
//     </>
//   );
// }
