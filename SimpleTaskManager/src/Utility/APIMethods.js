import axios from "axios";
import { fetchTasksUi } from "../UI/UpdateUI";
import { addNewTask } from "../UI/UpdateUI";
import { updateTaskUi } from "../UI/UpdateUI";
import { updateDeleteTask } from "../UI/UpdateUI";

export async function getTasks() {
  const tasks = await axios.get("https://jsonplaceholder.typicode.com/todos");
  fetchTasksUi(tasks.data.slice(0, 15));
}

export async function postTask(taskName) {
  let res;
  try {
    res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: taskName,
      completed: false,
    });
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  addNewTask(res.data);
}

export async function updateTask(taskId) {
  const task = document.getElementById(taskId);
  let s;
  if (task.querySelector(".updateBtn").classList.contains("success")) {
    s = true;
  } else {
    s = false;
  }
  const upstatus = s ? false : true;
  try {
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`,
      {
        completed: upstatus,
      }
    );
    updateTaskUi(res.data);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}

export async function deleteTask(taskId) {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
  updateDeleteTask(taskId);
}
