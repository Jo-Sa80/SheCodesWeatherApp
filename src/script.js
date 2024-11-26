function getCity(response) {
  let currentTemp = document.querySelector("#value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
}

let city = "Paris";
let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(getCity);
