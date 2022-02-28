const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav_menu");
const menu_btn = document.querySelector(".menu");
const close = document.querySelector(".close");
const overlay = document.querySelector(".nav_overlay");

//Remove preload class in body tag when windows loaded.
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

//Open navbar when hamburger menu was clicked
menu.addEventListener("click", () => {
  nav.classList.add("nav-open");
});

//Close navbar when close button was clicked
close.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});

//Close navbar when overlay was cliked
overlay.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});

//Close navbar when menu was cliked
menu_btn.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});
