import axios from "axios";

const show = document.getElementById("dispDetails");
const dispTemp = document.querySelector("template");

const showDetails = async (breed) => {
  const tempEl = document.importNode(dispTemp.content, true);
  show.innerHTML = "";
  tempEl.querySelector("h1").textContent = breed.name;
  const imgid = breed.reference_image_id;
  let img;
  try {
    img = await axios.get(`https://api.thecatapi.com/v1/images/${imgid}`);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  tempEl.querySelector("img").src = img.data.url;

  const details = img.data.breeds[0];

  tempEl.querySelector("#desc").innerHTML =
    "<strong>Description : </strong>" + details.description;

  tempEl.querySelector("#origin").innerHTML =
    "<strong>Origin : </strong>" + details.origin;

  tempEl.querySelector("#weight").innerHTML =
    "<strong>Weight : </strong>" + details.weight.metric + " Kg";

  tempEl.querySelector("#lifespan").innerHTML =
    "<strong>Life span : </strong>" + details.life_span + " years";

  tempEl.querySelector("#temperament").innerHTML =
    "<strong>Temperament : </strong>" + details.temperament;

  show.append(tempEl);
};

export const displayBreed = async (breedId) => {
  let res;
  try {
    res = await axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  showDetails(res.data);
};
