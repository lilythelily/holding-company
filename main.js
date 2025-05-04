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
const moveBtn = document.querySelectorAll(".move-btn");

// ***** nav dropdown control

function showDropdown() {
  dropdown.classList.remove("hidden");
}

function closeDropdown() {
  dropdown.classList.add("hidden");
}

hamburger.addEventListener("click", (e) => {
  showDropdown();
});

closeBtn.addEventListener("click", (e) => {
  closeDropdown();
});

// ***** ventures sliders control

// tab click control

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetIndex = Array.from(tabs).indexOf(e.target);
    sliders.forEach((slider, index) => {
      slider.classList.toggle("hidden", index !== targetIndex);
    });
  });
});

// arrow buttons control

let currentIndex = 0;

moveBtn.forEach((btn) => {
  if (btn === moveBtn[1]) {
    btn.addEventListener("click", (e) => {
      sliders.forEach((slider) => slider.classList.add("hidden"));

      currentIndex = (currentIndex + 1) % sliders.length;

      sliders[currentIndex].classList.remove("hidden");
    });
  }
  if (btn === moveBtn[0]) {
    btn.addEventListener("click", (e) => {
      sliders.forEach((slider) => slider.classList.add("hidden"));

      currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
      sliders[currentIndex].classList.remove("hidden");
    });
  }
});

// ***** meet our team image control

const memberImg = document.querySelectorAll(".member-img");
const meetSection = document.querySelector("#meet-our-team");

function fullImage() {
  memberImg.forEach((img) => {
    img.style.width = "100%";
    img.style.transition = "all 1s ease-in";
  });
}

meetSection.addEventListener("mouseenter", (e) => {
  fullImage();
});

// ***** values cards control

const valueItems = document.querySelector(".value-items");
const valueCard1 = document.querySelector("#value1");
const valueCard2 = document.querySelector("#value2");
const valueCard3 = document.querySelector("#value3");
const valueCard4 = document.querySelector("#value4");
const allCards = [valueCard1, valueCard2, valueCard3, valueCard4];

Array.from(valueItems.children).forEach((item) => {
  item.addEventListener("click", (e) => {
    allCards.forEach((card) => {
      card.style.display = "none";
    });
    if (e.target === valueItems.children[0]) {
      valueCard1.style.display = "flex";
    }
    if (e.target === valueItems.children[1]) {
      valueCard2.style.display = "flex";
    }
    if (e.target === valueItems.children[2]) {
      valueCard3.style.display = "flex";
    }
    if (e.target === valueItems.children[3]) {
      valueCard4.style.display = "flex";
    }
  });
});

// career parallax

const valueSection = document.querySelector("#our-values");
const careerHeader = document.querySelector(".career-header");

valueSection.addEventListener("mouseenter", (e) => {
  careerHeader.style.marginTop = "160px";
  careerHeader.style.transition = "all 1.5s linear";
});
