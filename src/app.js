let apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#todayTemperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather");

  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML =
    response.data.weather[0].description.toUpperCase();

  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}
