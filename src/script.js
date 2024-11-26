function showCity() {
  let newCity = document.querySelector("#weather-city");
  newCity.innerHTML = `${city}`;
}

showCity();

let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={paris}&key={apiKey}";

axios.get(apiUrl).then(showCity);
