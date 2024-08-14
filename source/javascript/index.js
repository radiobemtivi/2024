const showMenu = (e, t) => {
  let s = document.getElementById(e),
    n = document.getElementById(t);
  s &&
    n &&
    s.addEventListener("click", () => {
      n.classList.toggle("show-menu");
    });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  let e = document.getElementById("nav-menu");
  e.classList.remove("show-menu");
}
function scrollHeader() {
  let e = document.getElementById("header");
  this.scrollY >= 200
    ? e.classList.add("scroll-header")
    : e.classList.remove("scroll-header");
}
function scrollTop() {
  let e = document.getElementById("scroll-top");
  this.scrollY >= 560
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
}
navLink.forEach((e) => e.addEventListener("click", linkAction)),
  window.addEventListener("scroll", scrollHeader),
  window.addEventListener("scroll", scrollTop);
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "bx-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    darkTheme
  ),
  themeButton.classList["bx-moon" === selectedIcon ? "add" : "remove"](
    iconTheme
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle(iconTheme),
      localStorage.setItem("selected-theme", getCurrentTheme()),
      localStorage.setItem("selected-icon", getCurrentIcon());
  });
