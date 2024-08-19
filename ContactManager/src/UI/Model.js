const contTemp = document.querySelector("template");
const list = document.getElementById("contactList");

function sortingContacts() {
  let arr = Array.from(list.querySelectorAll("li"));
  arr.sort((a, b) => {
    const c1 = a.querySelector("h3").textContent;
    const c2 = b.querySelector("h3").textContent;
    return c1.localeCompare(c2);
  });
  list.innerHTML = "";
  arr.forEach((contact) => {
    list.append(contact);
  });
}

export function loadAllContactsInScreen(contacts) {
  for (const contact of contacts) {
    const tempEl = document.importNode(contTemp.content, true);
    tempEl.querySelector("h3").textContent = contact.name.toUpperCase();
    tempEl.getElementById("email").textContent = contact.email;
    tempEl.getElementById("phone").textContent = contact.phone;
    tempEl.querySelector("li").id = contact.id;
    list.append(tempEl);
  }
  sortingContacts();
}

export function addNewContactToScreen(contact) {
  const tempEl = document.importNode(contTemp.content, true);
  tempEl.querySelector("h3").textContent = contact.name.toUpperCase();
  tempEl.getElementById("email").textContent = contact.email;
  tempEl.getElementById("phone").textContent = contact.phone;
  tempEl.querySelector("li").id = contact.id;
  list.append(tempEl);
  sortingContacts();
}

export function updateAfterDeleting(id) {
  const contact = document.getElementById(id);
  contact.remove();
  sortingContacts();
}
