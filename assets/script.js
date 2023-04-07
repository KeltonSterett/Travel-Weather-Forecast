var searchCity = document.querySelector('#search-city');
var searchHistory = document.querySelector('#search-history');
var searchBtn = document.querySelector('#search-btn');
var currentWeather = document.querySelector('#current-weather');
var FiveDayForecast = document.querySelector('#Fiveday-forecast');

searchBtn.addEventListener('click', function() {
  var city = searchCity.value;
  getWeather(city);
  getCurrent(city);
  searchHistpryLS(city);
  displaySearchHistory();
});
// this is the function that gets the weather data from the api for 5 days
function getWeather(city) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=cf6f3b162a5bd1d23ba9950a7be05ad4';
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      FiveDayForecast.innerHTML = '';
      var weatherData = data.list[0];
      var firstFive = data.list.slice(0, 5);
      // console.log(firstFive);
      firstFive.forEach(function(day){
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var div5 = document.createElement('div');
        var icon = document.createElement('img');
        var temp = document.createElement('p');
        var humidity = document.createElement('p');
        var windSpeed = document.createElement('p');
        var date = document.createElement('p');
        var cityName = document.createElement('h2');
        FiveDayForecast.appendChild(div1);
        div1.classList.add('card');
        div1.classList.add('col');
        div2.classList.add('card-deck');
        div2.classList.add('text-center');
        div3.classList.add('card-title');
        div4.classList.add('card-text'); 
        div1.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(date);
        div3.appendChild(cityName);
        div2.appendChild(div4);
        div4.appendChild(icon);
        div4.appendChild(temp);
        div4.appendChild(humidity);
        div4.appendChild(windSpeed);
       
        date.textContent = day.dt_txt;
        cityName.textContent = data.city.name;
        icon.src = 'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
        temp.textContent = 'Temp: ' + day.main.temp + '°F';
        humidity.textContent = 'Humidity: ' + day.main.humidity + '%';
        windSpeed.textContent = 'Wind Speed: ' + day.wind.speed + ' MPH';
        
      })
    })
};
//  this is the function that gets the weather data from the api for the current day
function getCurrent(city) {
  var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=cf6f3b162a5bd1d23ba9950a7be05ad4';
  fetch(apiUrl)
    .then(function(response) {
      
      return response.json();
    })
    .then(function(data) {
      currentWeather.innerHTML = '';
      var weatherData = data.list[0];
      var firstDay = data.list.slice(0, 1);
      var div1 = document.createElement('div');
      var div2 = document.createElement('div');
      var div3 = document.createElement('div');
      var div4 = document.createElement('div');
      var div5 = document.createElement('div');
      var icon = document.createElement('img');
      var temp = document.createElement('p');
      var humidity = document.createElement('p');
      var windSpeed = document.createElement('p');
      var date = document.createElement('p');
      var cityName = document.createElement('h2');
      currentWeather.appendChild(div1);
      div1.classList.add('row');
      div1.classList.add('container');
      div2.classList.add('col');
      div2.classList.add('text-center');
      div1.appendChild(div2);
      div2.appendChild(div3);
      div3.classList.add('card-title');
      div3.appendChild(date);
      div3.appendChild(cityName);
      div2.appendChild(div4);
      div4.classList.add('card-text');
      div4.appendChild(icon);
      div4.appendChild(temp);
      div4.appendChild(humidity);
      div4.appendChild(windSpeed);
     
      date.textContent = firstDay[0].dt_txt;
      cityName.textContent = firstDay[0].name;
      icon.src = 'http://openweathermap.org/img/w/' + firstDay[0].weather[0].icon + '.png';
      temp.textContent = 'Temp: ' + firstDay[0].main.temp + '°F';
      humidity.textContent = 'Humidity: ' + firstDay[0].main.humidity + '%';
      windSpeed.textContent = 'Wind Speed: ' + firstDay[0].wind.speed + ' MPH';
    })
}

// could not get this to work

// // this is the function that saves the search history to local storage
// function searchHistpryLS(city) {
//   var searchHistorys = JSON.parse(localStorage.getItem('search-history')) || [];
//   searchHistory.push(city);
//   localStorage.setItem('search-history', JSON.stringify(searchHistory));
//   displaySearchHistory();
// }

// // this displays the search history
// function displaySearchHistory() {
//   searchHistory.forEach(function(city) {
//     var li = document.createElement('ul');
//     li.classList.add('list-group-item');
//     li.textContent = city;
//     searchHistory.appendChild(li);
//   });
// }
