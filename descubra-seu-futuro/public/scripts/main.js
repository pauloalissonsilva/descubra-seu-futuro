import IndexFunctions from "./index.js";
const elementButtonQuestion = document.querySelector("[data-btnQuestion]");
const elementInputQuestion = document.querySelector("[data-inpQuestion]");
const elementTittleResponse = document.querySelector("[data-titleResponse]");

function opacityAnimation(elementButton, elementTittle) {
  elementButton.setAttribute("disabled", true);
  elementTittle.style.opacity = 1;
  setTimeout(() => {
    elementTittle.style.opacity = 0;
    elementButton.removeAttribute("disabled");
  }, 3000);
}

function getAnswer() {
  let msg = "You need to type a question";
  if (elementInputQuestion.value.trim()) {
    msg = IndexFunctions.generateAnswer();
  }
  elementTittleResponse.innerHTML = `<span>${elementInputQuestion.value}</span> ${msg}`;
  opacityAnimation(elementButtonQuestion, elementTittleResponse);
}

elementButtonQuestion.addEventListener("click", getAnswer);
elementInputQuestion.addEventListener("keypress", (keyPressed) => {
  if (keyPressed.key == "Enter") {
    getAnswer();
  }
});