// function to create the task li
function addTask() {
  const li = document.createElement("li");
  const input = document.getElementById("input-id");
  const ul = document.getElementById("ul-id");
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = "";
  console.log(ul);
}

// function to delete a task

// function to add the new task to the DOM
document.getElementById("add-btn-id").addEventListener("click", function () {
  addTask();
});

// function to add the new task to the DOM on pressing enter key
document.getElementById("input-id").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("add-btn-id").click();
  }
});
