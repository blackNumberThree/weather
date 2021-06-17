Weather forecast app
Has three types of weather viewing: for now, for two days, for a week. Weather forecast is made using geodata latitude and longitude. The site initially asks for permission to geolocate the user, then the coordinates can be swept by selecting the city. In the weather section for two days, you can select a day and an hourly weather forecast will appear on the panel. In the weekly weather section, the panel displays the daily weather.

In the App component, the URL string is parsed and coordinates and timeMod are received from there, if there is no data in the URL string, then we have to take geodata. Then, a request is made to the server, the data received from there is first formatted, and then sent to the redux storage.

Приложение прогноза погоды Имеет три типа просмотра погоды: на сейчас, на два дня, на неделю Прогноз погоды делается по геоданным широте Сайт изначально запрашивает разрешение на геолокацию пользователя, затем координаты можно сметить выбрав город В разделе погода на два дня, можно выбрать день и на панели появиться почасовый прогноз погоды В разделе погода на неделю, на пональ выводиться погода посуточно

В компоненте App идет разбор URL строки и получение оттуда координат и таймМода, если данных в URL строке нет, то идет запрос геоданных. Потом с этими данными происходит запрос на сервер, полученные данные оттуда сначала форматируются, а потом отправляютс в redux хранилище.
