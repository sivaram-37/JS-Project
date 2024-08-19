import axios from "axios";
import {
  loadAllContactsInScreen,
  updateAfterDeleting,
  addNewContactToScreen,
} from "../UI/Model";

export async function fetchContacts() {
  try {
    const getResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
    loadAllContactsInScreen(getResponse.data);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}

export async function addContact(form, id = undefined) {
  const userInputName = form.querySelector("#contactName").value;
  const userInputEmail = form.querySelector("#contactEmail").value;
  const userInputPhone = form.querySelector("#contactPhone").value;
  if (id === undefined) {
    try {
      const postResponse = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: userInputName,
          phone: userInputPhone,
          email: userInputEmail,
        }
      );
      addNewContactToScreen(postResponse.data);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  } else {
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name: userInputName,
        phone: userInputPhone,
        email: userInputEmail,
      });
      addNewContactToScreen(postResponse.data);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  }
}

export async function editContact(id, form) {
  const userInputName = form.querySelector("#contactName").value;
  const userInputEmail = form.querySelector("#contactEmail").value;
  const userInputPhone = form.querySelector("#contactPhone").value;
  console.log(userInputEmail, userInputName, userInputPhone);

  try {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: userInputName,
      phone: userInputPhone,
      email: userInputEmail,
    });
    updateAfterDeleting(id);
    addNewContactToScreen(res.data);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
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
