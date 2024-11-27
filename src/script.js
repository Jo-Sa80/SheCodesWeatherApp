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
