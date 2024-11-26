//function getCity(response) {
//let currentTemp = document.querySelector("#value");
//currentTemp.innerHTML = Math.round(response.data.temperature.current);
//}

//let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
//let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

//axios.get(apiUrl).then(getCity);

function showSubmittedCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let newCity = document.querySelector("#weather-city");

  newCity.innerHTML = searchInput.value;
}
let searchElement = document.querySelector("#searchForm");

searchElement.addEventListener("submit", showSubmittedCity);
