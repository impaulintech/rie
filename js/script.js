const menu = document.querySelector(".nav_menu");
const nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
  console.log("Nav Clicked", Math.random());
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
