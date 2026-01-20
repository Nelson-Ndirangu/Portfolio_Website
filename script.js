const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const icon = document.getElementById("hamburgerIcon");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  navMenu.classList.toggle("active");

  // Swap icons (you provide images)
  icon.src = menuOpen ?  "./images/cancel-50.png": "./images/hamburger-menu-32.png" ;
});
