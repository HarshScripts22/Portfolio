function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let icon = document.querySelector(".mode");

icon.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./sun.png";
  } else {
    icon.src = "./moon.png";
  }
});
