var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
const header = document.querySelector("header");
const winHeight = window.screen.height;
const body = document.body;
console.log(body);
header.style.height = `${winHeight}px`;

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");

  if (this.classList.value === "close") {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "scroll";
  }
});
