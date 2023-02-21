const API = "https://api.adviceslip.com/advice";
const buttonElement = document.querySelector(".btn-container > button");
const adviceText = document.querySelector("#advice");
const adviceID = document.querySelector(".advice-id");
const dividerImage = document.querySelector(".divider-image");

window.addEventListener("resize", function () {
  if (this.window.innerWidth <= 590) {
    dividerImage.src = "./images/pattern-divider-mobile.svg";
  } else {
    dividerImage.src = "./images/pattern-divider-desktop.svg";
  }
});

function fetchAdvice() {
  fetch(API)
    .then((response) => response.json(response))
    .then((data) => {
      adviceText.innerHTML = data.slip.advice;
      adviceID.innerHTML = `#${data.slip.id}`;
    });
}

buttonElement.addEventListener("click", fetchAdvice);
