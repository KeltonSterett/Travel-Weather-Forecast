var searchCity = document.querySelector('#search-city');
var searchHistory = document.querySelector('#search-history');
var searchBtn = document.querySelector('#search-btn');
var currentWeather = document.querySelector('#current-weather');
// var FiveDayForecast = document.querySelector('#5day-forecast');

searchBtn.addEventListener('click', function() {
  var city = searchCity.value;
  getWeather(city);
});

function getWeather(city) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=cf6f3b162a5bd1d23ba9950a7be05ad4';
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

function displayWeather() {
  var cityName = document.querySelector('#city-name');
  var temp = document.querySelector('#temp');
  var humidity = document.querySelector('#humidity');
  var windSpeed = document.querySelector('#wind-speed');
  var uvIndex = document.querySelector('#uv-index');

  cityName.textContent = data.name;
  temp.textContent = data.main.temp;
  humidity.textContent = data.main.humidity;
  windSpeed.textContent = data.wind.speed;
  uvIndex.textContent = data.main.uvi;
}

