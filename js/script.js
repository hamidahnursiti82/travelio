let i = 0;
let images = [];
let time = 3000;
const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert("Please enter a valid email.");
    emailInput.focus();
    return;
  }

  form.submit();
});

function isValidEmail(email) {
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  return emailPattern.test(email);
}

images[0] = "assets/images/1-resize.jpg";
images[1] = "assets/images/2-resize.jpg";
images[2] = "assets/images/3-resize.jpg";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

console.log("hello world");
