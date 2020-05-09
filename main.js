taskList = [];

// function to create the task li
function addTask() {
  const li = document.createElement("li");
  const del = document.createElement("button");
  const input = document.getElementById("input-id");
  const ul = document.getElementById("ul-id");
  del.setAttribute("class", "del-btn-class");
  del.setAttribute("id", "del-btn-id");
  taskList.push(input.value);
  console.log(taskList);
  del.innerHTML = "Delete";
  del.onclick = delTask;
  li.innerHTML = input.value;
  li.appendChild(del);
  ul.appendChild(li);
  input.value = "";
  console.log(ul);
}

// function to delete a task
function delTask(e) {
  const getButtonID = e.target.id;
  console.log(getButtonID);
}

// event listener for add task button
document.getElementById("add-btn-id").addEventListener("click", function () {
  addTask();
});

// function to add the new task to the DOM on pressing enter key
document.getElementById("input-id").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("add-btn-id").click();
  }
});
