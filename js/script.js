console.log("script.js loaded");

const sidemenuToggle = document.querySelector(".sidemenu-toggle");
const sidemenu = document.querySelector(".sidemenu");

sidemenuToggle.addEventListener("click", () => {
    console.log("sidemenu-toggle clicked");
    sidemenu.classList.toggle("open");
});