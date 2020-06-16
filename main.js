taskList = [];

// get the tasks from local storage and add to DOM
if (localStorage.length > 0) {
  taskListLS = [];
  const localStorageObject = localStorage.getItem(taskListLS);
  taskList = JSON.parse(localStorageObject);
  // get text for each task
  taskList.forEach((task) => {
    if (task.isCompleted === false) {
      console.log(task);
      const li = document.createElement("li");
      const del = document.createElement("button");
      const txt = document.createElement("div");
      const input = document.getElementById("input-id");
      const ul = document.getElementById("ul-id");
      del.setAttribute("class", "material-icons");
      del.setAttribute("id", "del-btn-id");
      txt.setAttribute("class", "li-txt-class");
      //add text and delete button to li element
      txt.innerHTML = task.text;
      li.appendChild(txt);
      li.appendChild(del);
      //delete button functionality
      del.innerHTML = "delete";
      del.onclick = delTask;
      // get the ID of the last task in local storage
      id = task.id;
      li.setAttribute("id", id);
      // add task to the DOM
      ul.appendChild(li);
    }
  });
}

// function to create the task li and add task
function addTask() {
  const li = document.createElement("li");
  const txt = document.createElement("div");
  const del = document.createElement("button");
  const input = document.getElementById("input-id");
  const ul = document.getElementById("ul-id");
  del.setAttribute("class", "material-icons");
  del.setAttribute("id", "del-btn-id");
  txt.setAttribute("class", "li-txt-class");

  //check for empty tasks
  if (input.value === "") {
    console.log("no text entered for task");
  } else {
    //add text and delete button to li element
    txt.innerHTML = input.value;
    li.appendChild(txt);
    li.appendChild(del);
    // get the ID of the last task in local storage
    if (localStorage.length > 0) {
      const localStorageObject = localStorage.getItem(taskListLS);
      taskList = JSON.parse(localStorageObject);
      id = taskList[taskList.length - 1].id; // gets id of last task
    } else {
      id = 0; // if no tasks in local storage
    }
    //increment the task ID every new task
    id++;
    //create the task object
    const task = {
      id: id,
      text: input.value,
      isCompleted: false,
    };
    li.setAttribute("id", task.id);
    //add the task to the task list array
    taskList.push(task);
    //add the task to local storage
    localStorage.setItem(taskListLS, JSON.stringify(taskList));
    //delete button functionality
    del.innerHTML = "delete";
    del.onclick = delTask;
    // add task to the DOM
    ul.appendChild(li);
    input.value = "";
  }
}

// function to delete a task
function delTask(e) {
  // get the id of the task
  const getTaskId = e.target.parentNode.id;
  //get the existing data from local storage
  const existing = localStorage.getItem(taskListLS);
  //convert local storage string to an array
  const existingParsed = JSON.parse(existing);
  //get the object which matches the id of the parent del
  function search(idKey, taskArray) {
    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i].id == idKey) {
        taskArray[i].isCompleted = true;
        const existing = localStorage.getItem(taskListLS);
        //convert local storage string to an array
        const existingParsed = JSON.parse(existing);
        existingParsed[i].isCompleted = true;
        //add the updated task list to local storage
        localStorage.setItem(taskListLS, JSON.stringify(existingParsed));
        break;
      }
    }
  }
  var resultObject = search(getTaskId, existingParsed);

  // remove the li from the DOM
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
