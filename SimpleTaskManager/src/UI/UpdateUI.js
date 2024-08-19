const list = document.querySelector("#tasks");
const taskTemplate = document.getElementById("task-template");

export function fetchTasksUi(tasks) {
  for (const task of tasks) {
    const taskEl = document.importNode(taskTemplate.content, true);
    taskEl.querySelector("h2").textContent = task.title;
    const liEl = taskEl.querySelector("li");
    liEl.id = task.id;
    if (task.completed) {
      taskEl.querySelector("button:first-of-type").textContent = "Task Status Completed";
      liEl.classList.add("success");
    } else {
      taskEl.querySelector("button:first-of-type").textContent = "Task Status Pending...";
      liEl.classList.add("pending");
    }
    list.appendChild(taskEl);
  }
}

export function addNewTask(newTask) {
  const newTaskEl = document.importNode(taskTemplate.content, true);
  newTaskEl.querySelector("h2").textContent = newTask.title;
  const liEl = newTaskEl.querySelector("li");
  liEl.id = newTask.id;
  newTaskEl.querySelector("button:first-of-type").textContent = "Task Pending";
  liEl.classList.add("pending");
  list.append(newTaskEl);
}

export function updateTaskUi(newTask) {
  const id = newTask.id;
  const task = document.getElementById(id);

  if (task.classList.contains("pending")) {
    task.querySelector("button:first-of-type").innerHTML = "Task Status Completed";
    task.classList.remove("pending");
    task.classList.add("success");
  } else {
    task.querySelector("button:first-of-type").innerHTML = "Task Status Pending...";
    task.classList.remove("success");
    task.classList.add("pending");
  }
}

export function updateDeleteTask(taskId) {
  const task = document.getElementById(taskId);
  task.remove();
}
