const textBox = document.querySelector("#todoText");
const ul = document.querySelector("#list");
const li = document.createElement("li");

// get the value of the todo text when clicking Add

document.getElementById("btn").addEventListener("click", function () {
  const li = document.createTextNode(textBox.value);
  ul.appendChild(li);
});
