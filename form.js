"use strict";

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const errorMsg = document.querySelectorAll("small");
const submitBtn = document.querySelector(".submit-btn");
const nanReg = /^([1-9]{1,8})$/;
const modal = document.querySelector(".thankyou-modal");

// empty check

let validForm = true;

function emptyName() {
  if (input[0].value.trim() === "") {
    input[0].nextElementSibling.classList.remove("hidden");
    input[0].style.borderColor = "red";
    validForm = false;
  } else {
    input[0].nextElementSibling.classList.add("hidden");
    input[0].style.borderColor = "lime";
  }
}

// function emptyCheck() {
//   input.forEach((input) => {
//     if (input.value.trim() === "") {
//       input.nextElementSibling.classList.remove("hidden");
//       input.style.borderColor = "red";
//       validForm = false;
//     } else {
//         input.nextElementSibling.classList.add('hidden');
//         input.style.borderColor = 'lime';
//     }
//   });
// }

function textAreaCheck() {
  if (textArea.value.trim() === "") {
    textArea.nextElementSibling.classList.remove("hidden");
    textArea.style.borderColor = "red";
    validForm = false;
  } else {
    textArea.nextElementSibling.classList.add("hidden");
    textArea.style.borderColor = "lime";
  }
}

// email validation

function checkEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(input[1].value.trim()) || input[1].value.trim() === "") {
    errorMsg[1].classList.remove("hidden");
    errorMsg[1].textContent = `Please enter a valid email address.`;
    input[1].style.borderColor = "red";
    validForm = false;
  } else {
    errorMsg[1].classList.add("hidden");
    input[1].style.borderColor = "lime";
  }
}

// NAN check
function nanCheck() {
  if (!nanReg.test(input[2].value.trim()) || input[2].value.trim() === "") {
    errorMsg[2].classList.remove("hidden");
    errorMsg[2].textContent = `Please enter a valid number.`;
    input[2].style.borderColor = "red";
    validForm = false;
  } else {
    errorMsg[2].classList.add("hidden");
    input[2].style.borderColor = "lime";
  }
}

// show modal

function showModal() {
  modal.style.display = "flex";
}

// event fired

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyName();
  checkEmail();
  nanCheck();
  textAreaCheck();

  if (validForm) {
    showModal();
  } else {
    validForm = true;
  }
});
