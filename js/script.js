const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav_menu");
const close = document.querySelector(".close");
const overlay = document.querySelector(".nav_overlay");

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
menu.addEventListener("click", () => {
  nav.classList.add("nav-open");
});
close.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});
overlay.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});
