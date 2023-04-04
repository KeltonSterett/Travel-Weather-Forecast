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
  var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=cf6f3b162a5bd1d23ba9950a7be05ad4';
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var weatherData = data.list[0];
      var firstFive = data.list.slice(0, 5);
      // console.log(firstFive);
      firstFive.forEach(function(day){
        var date = day.dt_txt.split(' ')[0];
        var icon = day.weather[0].icon;
        var temp = day.main.temp;
        var humidity = day.main.humidity;
        var card = document.createElement('div');
        card.className = 'card';
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = date;
        var cardImg = document.createElement('img');
        cardImg.setAttribute('src', 'http://openweathermap.org/img/w/' + icon + '.png');
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = 'Temp: ' + temp + "F" + ' Humidity: ' + humidity;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardImg);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        currentWeather.appendChild(card);
      })
    });
}

// function displayWeather() {
//   var cityName = document.querySelector('#city-name');
//   var temp = document.querySelector('#temp');
//   var humidity = document.querySelector('#humidity');
//   var windSpeed = document.querySelector('#wind-speed');
//   var uvIndex = document.querySelector('#uv-index');

//   cityName.textContent = data.name;
//   temp.textContent = data.main.temp;
//   humidity.textContent = data.main.humidity;
//   windSpeed.textContent = data.wind.speed;
//   uvIndex.textContent = data.main.uvi;
// }

