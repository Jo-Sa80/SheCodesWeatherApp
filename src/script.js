function showTemperature(response) {
  let currentTemp = document.querySelector("#value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#weather-city");
  currentCity.innerHTML = response.data.city;
  console.log(response);
  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
}

function showCity(city) {
  let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function showSubmittedCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  showCity(searchInput.value);
}

let searchElement = document.querySelector("#searchForm");
searchElement.addEventListener("submit", showSubmittedCity);

showCity("Berlin");

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  console.log(minutes);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formatetDay = days[day];
  return `${formatetDay}, ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
