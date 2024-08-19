import { getTasks } from "./Utility/APIMethods";
import { postTask } from "./Utility/APIMethods";
import { updateTask } from "./Utility/APIMethods";
import { deleteTask } from "./Utility/APIMethods";

const taskForm = document.getElementById("taskForm");
const tasks = document.querySelector("ul");

// To fetch Task from server
document.addEventListener("DOMContentLoaded", () => getTasks());

// To add Task to server
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = document.getElementById("taskName").value;
  postTask(taskName);
});

// To update Task and delete Task
tasks.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const taskId = event.target.closest("li").id;
    if (event.target.classList.contains("updateBtn")) {
      updateTask(taskId);
    } else if (event.target.classList.contains("deleteBtn")) {
      deleteTask(taskId);
    }
  }
});
