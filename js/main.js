const navToogle = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");

navToogle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToogle.setAttribute("aria-label", "Cerrar menu");
  } else {
    navToogle.setAttribute("aria-label", "Abrir menu");
  }
});
