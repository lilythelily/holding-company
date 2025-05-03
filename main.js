"use strict";

const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector(".dropdown");
const closeBtn = document.querySelector("#close");
const tabs = document.querySelectorAll(".tabs");
const slider1 = document.querySelector(".slider-img1");
const slider2 = document.querySelector(".slider-img2");
const slider3 = document.querySelector(".slider-img3");
const slider4 = document.querySelector(".slider-img4");
const slider5 = document.querySelector(".slider-img5");
const sliders = [slider1, slider2, slider3, slider4, slider5];

function showDropdown() {
  dropdown.style.right = "0";
  dropdown.style.transition = "all .2s ease-in";
}

function closeDropdown() {
  dropdown.style.right = "-200px";
  dropdown.style.transition = "all .2s ease-in";
}

hamburger.addEventListener("click", (e) => {
  showDropdown();
});

closeBtn.addEventListener("click", (e) => {
  closeDropdown();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetIndex = Array.from(tabs).indexOf(e.target);
    sliders.forEach((slider, index) => {
      slider.classList.toggle("hidden", index !== targetIndex);
    });
  });
});

// venture card click - show next card
