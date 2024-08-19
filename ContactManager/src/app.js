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

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      closeAddContactMenu(); // removing overlay and backdrop effect
      addContact(form); // Submit form data to server
      form.reset(); // clearing the form inputs. When next it is opened you get a empty input fields
    },
    { once: true }
  );

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

      form.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          closeAddContactMenu();
          editContact(id, form);
          form.reset();
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
