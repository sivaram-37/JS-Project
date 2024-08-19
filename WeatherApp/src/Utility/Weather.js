import { updateUi } from "../UI/Model";

const API_KEY = "d1da02dc60e24258bb1105101241408";

export async function getWeather(city) {
  const encodedcity = encodeURI(city);
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodedcity}&aqi=no`
  );
  try {
    if (res.status === 200) {
      const data = await res.json();
      updateUi(data);
    }
  } catch (err) {
    alert(err.message);
  }
}
