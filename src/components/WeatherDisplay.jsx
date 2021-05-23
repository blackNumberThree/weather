export function WitherDisplay({ weatherMap }) {
  return (
    <ol>
      <li>иконка {weatherMap.icon}</li>
      <li>температура {weatherMap.temp}</li>
      <li>чувствуется как {weatherMap.feels_like}</li>
      <li>облачность {weatherMap.clouds}</li>
      <li>давление {weatherMap.pressure}</li>
      <li>влажность {weatherMap.humidity}</li>
      <li>ветер {weatherMap.windSpeed}</li>
      <li>порывы ветра {weatherMap.windGust}</li>
      <li>Ультрафиолет {weatherMap.uvi}</li>
      <li>Описание {weatherMap.description}</li>
    </ol>
  );
}
