// Keeps the current year updated
document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// Hides/show moblie menu bar when needed
var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
});

// Hides/show moblie sub menu bar when needed
var mobileSubMenuBtn = document.querySelector(".mobile-submenu-button");
var mobileSubMenu = document.querySelector(".mobile-submenu");
var mobileArrow = document.querySelector(".moblie-arrow");
var mobileArrowDown = document.querySelector(".moblie-arrow-down");
console.log(mobileArrowDown.style.display);

mobileSubMenuBtn.addEventListener("click", () => {
  if (mobileSubMenu.style.display === "none") {
    mobileSubMenu.style.display = "flex";
    mobileArrowDown.style.display = "inline";
    mobileArrow.style.display = "none";
  } else {
    mobileSubMenu.style.display = "none";
    mobileArrowDown.style.display = "none";
    mobileArrow.style.display = "inline";
  }
});
