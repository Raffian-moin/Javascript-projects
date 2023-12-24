function handleAddButton() {
  let getInputValue = document.querySelector("#myInput");

  if (getInputValue.value) {
    let lists = document.querySelector("#myUL");
    lists.insertAdjacentHTML(
      "beforeend",
      `<li>${getInputValue.value}<span class="close">\u00D7</span></li>`
    );
  }

  getInputValue.value = "";
}

function handelItem(event) {
  if (event.target.className === "close") {
    event.target.closest("li").remove();
  }

  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}
