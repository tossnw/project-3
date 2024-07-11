var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
const header = document.querySelector("header");
const winHeight = window.screen.height;
header.style.height = `${winHeight}px`;

burgerMenu.addEventListener("click", function () {
	this.classList.toggle("close");
	overlay.classList.toggle("overlay");
  });
  