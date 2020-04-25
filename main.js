const textBox = document.querySelector("#todoText");
const ul = document.querySelector("#list");

// get the value of the todo text when clicking Add
document.getElementById("add-btn").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerHTML = textBox.value;
  ul.appendChild(li);
  document.getElementById("todoText").value = "";
});

//remove last li in list
document.getElementById("remove-btn").addEventListener("click", function () {
  ul.lastElementChild.remove();
});
