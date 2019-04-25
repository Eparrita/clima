const { Weather } = require("./Weather");
const { UI } = require("./UI");
const { Store } = require("./Store");

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require("./Index.css");

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}
document.getElementById("w-change-btn").addEventListener("click", e => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.changeLocation(city, countryCode);
  store.setLocalData(city, countryCode);
  fetchWeather();
});
document.addEventListener("DOMContentLoaded", fetchWeather);
