import { getWeather } from "./Utility/Weather";

const searchBtn = document.getElementById("searchButton");

const searchBtnHandler = () => {
  const inputCity = document.getElementById("cityInput").value;
  getWeather(inputCity);
};

searchBtn.addEventListener("click", searchBtnHandler);
