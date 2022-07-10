"use strict";

const iconMenu = document.querySelector(".mobile-menu-icon");
const menuResponsive = document.getElementById("header-mobile");
//windowScroll
const headerTop = document.querySelector(".header-top");
const header = document.querySelector("#header");
// toggleShow
const iconSearch = document.querySelector(".icon-search");
const searchBox = document.querySelector(".search-box");
const iconClose = document.querySelector(".btn-close");


function start() {
  iconMenu.addEventListener("click", () => {
    menuResponsive.classList.toggle("header-mobile-toggle");
  });

  const toggleSearchBox = () => {
    searchBox.classList.toggle("hide");
  };

  iconSearch.addEventListener("click", toggleSearchBox);
  iconClose.addEventListener("click", toggleSearchBox);
  searchBox.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleSearchBox();
  });



  const handleScroll = () => {
    window.scrollY > 100
      ? backTop.classList.remove("hide")
      : backTop.classList.add("hide");
    window.scrollY > 150
      ? header.classList.add("sticky-active")
      : header.classList.remove("sticky-active");
    window.scrollY > 150
      ? header.classList.add("slideInDown")
      : header.classList.remove("slideInDown");
    window.scrollY > 150
      ? header.classList.add("animated")
      : header.classList.remove("animated");
  };

  window.addEventListener("scroll", handleScroll);
}

start();
