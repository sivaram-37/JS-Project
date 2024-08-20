import { getAllBreeds } from "./Utility/FetchAllBreeds";
import { displayBreed } from "./Utility/ShowDetails";

const list = document.getElementById("item-list");

// After clicking Start Button
document.addEventListener("DOMContentLoaded", getAllBreeds);

// After click breed in list
list.addEventListener("click", (event) => {
  const breedId = event.target.closest("li").id;
  displayBreed(breedId);
});
