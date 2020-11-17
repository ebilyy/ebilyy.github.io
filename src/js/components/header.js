const header = document.querySelector(".js-header");
const menuOpenClass = "menu-open";
const burgerBtn = document.querySelector(".js-burger");
const headerMenuBg = document.querySelector(".js-menu-bg");
const headerMenulinks = document.querySelector(".js-menu-links");
function openMenu() {
  header.classList.toggle(menuOpenClass);
  burgerBtn.classList.toggle("is-open");
  headerMenuBg.classList.toggle("is-open");
}

burgerBtn.addEventListener("click", openMenu);
