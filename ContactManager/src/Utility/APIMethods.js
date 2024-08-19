import axios from "axios";
import {
  loadAllContactsInScreen,
  updateAfterDeleting,
  addNewContactToScreen,
} from "../UI/Model";

export async function fetchContacts() {
  let getResponse;
  try {
    getResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  loadAllContactsInScreen(getResponse.data);
}

export async function addContact(form) {
  const userInputName = form.querySelector("#contactName").value;
  const userInputEmail = form.querySelector("#contactEmail").value;
  const userInputPhone = form.querySelector("#contactPhone").value;
  let postResponse;
  try {
    postResponse = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name: userInputName.trim(),
      phone: userInputPhone.trim(),
      email: userInputEmail.trim(),
    });
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  addNewContactToScreen(postResponse.data);
}

export async function editContact(id, form) {
  const userInputName = form.querySelector("#contactName").value;
  const userInputEmail = form.querySelector("#contactEmail").value;
  const userInputPhone = form.querySelector("#contactPhone").value;
  let res;
  try {
    res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: userInputName.trim(),
      phone: userInputPhone.trim(),
      email: userInputEmail.trim(),
    });
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  updateAfterDeleting(id);
  addNewContactToScreen(res.data);
}

export async function deleteContact(id) {
  alert(`Are you sure!
you want to delete this contact`);
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    updateAfterDeleting(id);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}
