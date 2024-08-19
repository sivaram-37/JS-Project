import { getAllBreeds } from "./Utility/FetchAllBreeds";
import { displayBreed } from "./Utility/ShowDetails";

const list = document.getElementById("item-list");

document.addEventListener("DOMContentLoaded", getAllBreeds);

list.addEventListener("click", (event) => {
  const breedId = event.target.closest("li").id;
  displayBreed(breedId);
});
