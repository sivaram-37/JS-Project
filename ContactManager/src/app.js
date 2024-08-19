import {
  fetchContacts,
  addContact,
  editContact,
  deleteContact,
} from "./Utility/APIMethods";

const addContactBtn = document.getElementById("addContact");
const backdrop = document.getElementById("backdrop");
const dispAddContact = document.getElementById("overlay-addContact");
const closeDispAddContact = document.getElementById("close-btn");
const list = document.getElementById("contactList");

function openAddContactMenu() {
  backdrop.classList.add("visible");
  dispAddContact.classList.add("visible");
}

function closeAddContactMenu() {
  backdrop.classList.remove("visible");
  dispAddContact.classList.remove("visible");
}

// fetching Contacts from server
document.addEventListener("DOMContentLoaded", () => {
  fetchContacts();
});

// Adding a new contact to the server
addContactBtn.addEventListener("click", () => {
  const form = document.querySelector("form");

  openAddContactMenu(); // appling overlay and backdrop effect

  const addingNewContactHandler = (event) => {
    event.preventDefault();
    closeAddContactMenu(); // removing overlay and backdrop effect
    addContact(form); // Submit form data to server
    console.log(form);
    form.reset(); // clearing the form inputs. When next it is opened you get a empty input fields

    form.removeEventListener("click", addingNewContactHandler);
  };

  form.addEventListener("submit", addingNewContactHandler);

  closeDispAddContact.addEventListener("click", () => {
    closeAddContactMenu(); // removing overlay and backdrop effect
  });
});

list.addEventListener("click", (event) => {
  const form = document.querySelector("form");
  const id = event.target.closest("li").id;

  if (event.target.tagName === "BUTTON") {
    // Updating a contact to the server
    if (event.target.classList.contains("edit")) {
      const contact = document.getElementById(id);

      form.querySelector("h2").textContent = "Edit Contact";
      form.querySelector(`#contactName`).value = contact.querySelector("h3").textContent;
      form.querySelector("#contactEmail").value =
        contact.querySelector("p:first-of-type").textContent;
      form.querySelector("#contactPhone").value =
        contact.querySelector("p:last-of-type").textContent;

      openAddContactMenu();

      // console.log(form);
      console.log(contact.querySelector("h3").textContent); // Check if this gives the expected name
      console.log(contact.querySelector("p:first-of-type").textContent); // Check if this gives the expected email
      console.log(contact.querySelector("p:last-of-type").textContent); // Check if this gives the expected phone number

      const nameField = form.querySelector("#contactName");
      const emailField = form.querySelector("#contactEmail");
      const phoneField = form.querySelector("#contactPhone");
      console.log(nameField, emailField, phoneField); // Ensure these are not null or undefined

      form.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          closeAddContactMenu();
          // addContact(form, id);
          editContact(id, form);
        },
        { once: true } // event listner is removed after the it is finished no need to manually disable
      );
    }

    // Deleting a contact from the server
    else if (event.target.classList.contains("del")) {
      deleteContact(id);
    }
  }
});
