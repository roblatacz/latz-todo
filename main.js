const textBox = document.querySelector("#todoText");
const ul = document.querySelector("#list");
const listItem = document.querySelectorAll(".listItem");

// get the value of the todo text when clicking Add
document.getElementById("add-btn").addEventListener("click", function () {
  const li = document.createElement("li");
  const libtn = document.createElement("button");
  const lilength = document.querySelectorAll(".li");
  libtn.innerHTML = "Delete";
  libtn.setAttribute("id", "del");
  li.setAttribute("class", "li");
  li.innerHTML = textBox.value;
  ul.appendChild(li);
  document.getElementById("todoText").value = "";
  li.appendChild(libtn);
  console.log(lilength.length);
  deleteItem();

  function deleteItem() {
    if (lilength.length > 0) {
      console.log("atleast 1 li");
    } else {
      console.log("0 li");
    }
  }

  //delete line if delete button is clicked
  document.getElementById("del").addEventListener("click", function () {
    const del = document.querySelector("#del");
    del.parentNode.remove();
  });
});

//remove last li in list
// document.getElementById("remove-btn").addEventListener("click", function () {
//   ul.lastElementChild.remove();
// });

// remove item from the list
// document.getElementById("delbtn").addEventListener("click", function () {
//   ul.parentnode.removechild();
// });

// // remove item using delete button
// const del = document.getElementById(del);
// document.getElementById(del).addEventListener("click", function () {
//   document.getElementById(del).remove;
// });
