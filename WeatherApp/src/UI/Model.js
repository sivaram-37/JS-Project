const setCity = document.getElementById("cityName");
const setDate = document.getElementById("date");
const settemp = document.getElementById("temperature");
const setDesc = document.getElementById("description");
const setHumidity = document.getElementById("humidity");
const setWind = document.getElementById("wind");
const img = document.getElementById("descImg");

export function updateUi(data) {
  setCity.textContent = data.location.name;
  setDate.textContent = data.current.last_updated;
  settemp.textContent = data.current.temp_c + "°C";
  setDesc.textContent = data.current.condition.text;
  img.src = data.current.condition.icon;
  setHumidity.textContent = data.current.humidity + "%";
  setWind.textContent = data.current.wind_kph + " km/h";
}
