taskList = [];
taskListLS = [];
id = 0; // this should be the ID of the last task we have in local storage

// get the tasks from local storage and add to DOM
if (localStorage.length > 0) {
  const localStorageObject = localStorage.getItem(taskListLS);
  taskList = JSON.parse(localStorageObject);
  console.log(taskList);
  // get text for each task
  taskList.forEach((task) => {
    console.log(task.text);
    const li = document.createElement("li");
    const del = document.createElement("button");
    const input = document.getElementById("input-id");
    const ul = document.getElementById("ul-id");
    del.setAttribute("class", "del-btn-class");
    del.setAttribute("id", "del-btn-id");
    //add text and delete button to li element
    li.innerHTML = task.text;
    li.appendChild(del);
    //delete button stuff
    del.innerHTML = "Delete";
    del.onclick = delTask;
    // add task to the DOM
    ul.appendChild(li);
  });
}

// function to create the task li
function addTask() {
  const li = document.createElement("li");
  const del = document.createElement("button");
  const input = document.getElementById("input-id");
  const ul = document.getElementById("ul-id");
  del.setAttribute("class", "del-btn-class");
  del.setAttribute("id", "del-btn-id");
  //add text and delete button to li element
  li.innerHTML = input.value;
  li.appendChild(del);
  //increment the task ID every new task
  id++;
  //create the task object
  const task = {
    id: id,
    text: input.value,
    isCompleted: false,
  };
  //add the task to the task list array
  taskList.push(task);
  //add the task to local storage
  localStorage.setItem(taskListLS, JSON.stringify(taskList));
  console.log(localStorage);
  // localStorage.setItem();
  console.log(taskList);
  //delete button stuff
  del.innerHTML = "Delete";
  del.onclick = delTask;
  // add task to the DOM
  ul.appendChild(li);
  input.value = "";
}

// function to delete a task
function delTask(e) {
  const getButtonID = e.target.id;
  console.log(getButtonID);
  console.log(e.target.parentNode);
  e.target.parentNode.remove();
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
