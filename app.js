"use stcict";

// Selectors
const form = document.getElementById("form");
const list = document.querySelector("ul");
const bugText = document.querySelector("p");
const typeInp = document.getElementById("todo-inp");
const themeBtn = document.getElementById("theme-btn");
const body = document.querySelector("body");
const data = document.getElementById("data");
const newData = document.getElementById("new-data");
// /Selectors

// =============================================================================

// new Date

function getDate() {
  let date = new Date();
  data.textContent = `${date.getHours()}:${date.getMinutes()}`;
  newData.textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

setInterval(function () {
  getDate();
}, 10);

// /new Date

// =============================================================================

// Theme
themeBtn.addEventListener("click", () => {
  body.classList.toggle("black");
  if (themeBtn.innerText == "OFF") {
    themeBtn.innerText = "ON";
    data.style.color = "#000";
    newData.style.color = "rgb(63, 62, 62)";
  } else {
    data.style.color = "#fff";
    themeBtn.innerText = "OFF";
    newData.style.color = "#fff";
  }
  typeInp.classList.add("form-inp");
});
// /Theme

// =============================================================================

// Form Submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  todoType();
});

function todoType() {
  const errorText = "Please Enter Your Text";
  if (typeInp.value <= 0) {
    bugText.style.opacity = "1";
    bugText.innerText = errorText;
    bugText.classList.add("error-text");
    typeInp.style.border = "2px solid red";
  } else {
    typeInp.style.border = "none";
    bugText.style.opacity = "0";
    let newText = typeInp.value;
    newText.trim();
    const newList = document.createElement("li");
    newList.innerText = newText;
    localStorage.setItem("inp-text", newText);
    newList.classList.add("list-item");
    list.appendChild(newList);
    typeInp.value = "";
    const editBtn = document.createElement("i");
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    newList.appendChild(editBtn);

    // =============================================================================

    const deletedBtn = document.createElement("i");
    deletedBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    newList.appendChild(deletedBtn);

    editBtn.addEventListener("click", () => {
      typeInp.value += localStorage.getItem("inp-text").trim();
      newList.remove();
    });

    deletedBtn.addEventListener("click", () => {
      newList.remove();
    });
  }
}
// Form Submit
