import axios from "axios";

const list = document.getElementById("item-list");

const showAllBreeds = (breeds) => {
  for (const breed of breeds) {
    const li = document.createElement("li");
    li.textContent = breed.name;
    li.id = breed.id;
    // list.append(li); // li is added one after another
    list.prepend(li); // li is added before one another
  }
};

export const getAllBreeds = async () => {
  let res;
  try {
    res = await axios.get("https://api.thecatapi.com/v1/breeds?limit=100");
  } catch (err) {
    alert(arr.message);
    console.log(err);
  }
  showAllBreeds(res.data);
};
