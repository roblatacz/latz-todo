// function to create the task li
function createTask() {
  const li = document.createElement("li");
  const input = document.getElementById("input-id");
  const ul = document.getElementById("ul-id");
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = "";
  console.log(ul);
}

// function to add the new task to the DOM
document.getElementById("add-btn-id").addEventListener("click", function () {
  createTask();
});
