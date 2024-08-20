import axios from "axios";

const list = document.getElementById("item-list");

const showAllBreeds = (breeds) => {
  // for (const breed of breeds) {
  //   const li = document.createElement("li");
  //   li.textContent = breed.name;
  //   li.id = breed.id;
  //   // list.append(li); // li is added one after another
  //   list.prepend(li); // li is added before one another
  // }
  for (let i = breeds.length - 1; i >= 0; i--) {
    const breedName = breeds[i].name;
    const breedId = breeds[i].id;
    const li = document.createElement("li");
    li.textContent = breedName;
    li.id = breedId;
    list.append(li);
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
