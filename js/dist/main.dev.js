"use strict";

/*--Menu START--*/
//Mobile menu
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var menu = document.querySelector('.header__box');

if (menuBtn != null) {
  menuBtn.addEventListener('click', menuOpen);
}

if (closeBtn != null) {
  closeBtn.addEventListener('click', closeMenu);
}

function menuOpen() {
  //ShowMenu
  menu.classList.add('active');
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeMenu() {
  //HideMenu
  menu.classList.remove('active');
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}