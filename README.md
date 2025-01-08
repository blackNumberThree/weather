<<<<<<< HEAD
Weather forecast app
Has three types of weather viewing: for now, for two days, for a week. Weather forecast is made using geodata latitude and longitude. The site initially asks for permission to geolocate the user, then the coordinates can be swept by selecting the city. In the weather section for two days, you can select a day and an hourly weather forecast will appear on the panel. In the weekly weather section, the panel displays the daily weather.

In the App component, the URL string is parsed and coordinates and timeMod are received from there, if there is no data in the URL string, then we have to take geodata and it push in URL. Then, a request is made to the server, the data received from there is first formatted, and then sent to the redux storage.

