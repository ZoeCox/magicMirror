import { responses } from "./fortuneVals.js";

const mirrorContainer = document.querySelector("#mirror-container");
const submitBtn = document.querySelector("#submit-button");
const resetBtn = document.querySelector("#reset-button");
const questionSection = document.querySelector("#user-question-section");

const radioButtons = {
  environmentRadios: document.getElementsByName("environment-option"),
  trolleyRadios: document.getElementsByName("trolley-option"),
  moneyRadios: document.getElementsByName("money-option"),
  doorRadios: document.getElementsByName("door-option"),
};

const userChoice = {
  badPoints: 0,
  goodPoints: 0,
  environmentType: "",
};

const fortuneDecider = (environmentAnswer) => {
  if (userChoice.badPoints > userChoice.goodPoints) {
    questionSection.classList.add("hidden");
    mirrorContainer.classList.remove("hidden");
    switch (environmentAnswer) {
      case "alone":
        mirrorContainer.innerHTML = responses.negative.alone;
        break;
      case "business":
        mirrorContainer.innerHTML = responses.negative.business;
        break;
      case "creative":
        mirrorContainer.innerHTML = responses.negative.creative;
        break;
      case "farm":
        mirrorContainer.innerHTML = responses.negative.farm;
        break;
      case "family":
        mirrorContainer.innerHTML = responses.negative.family;
        break;
    }
  }
  if (userChoice.goodPoints > userChoice.badPoints) {
    questionSection.classList.add("hidden");
    mirrorContainer.classList.remove("hidden");
    switch (environmentAnswer) {
      case "alone":
        mirrorContainer.innerHTML = responses.positive.alone;
        break;
      case "business":
        mirrorContainer.innerHTML = responses.positive.business;
        break;
      case "creative":
        mirrorContainer.innerHTML = responses.positive.creative;
        break;
      case "farm":
        mirrorContainer.innerHTML = responses.positive.farm;
        break;
      case "family":
        mirrorContainer.innerHTML = responses.positive.family;
        break;
    }
  }
};
submitBtn.addEventListener("click", () => {
  for (let i = 0; i < radioButtons.environmentRadios.length; i++) {
    if (radioButtons.environmentRadios[i].checked) {
      userChoice.environmentType = radioButtons.environmentRadios[i].value;
      console.log(userChoice.environmentType);
    }
  }
  for (let j = 0; j < radioButtons.trolleyRadios.length; j++) {
    if (radioButtons.trolleyRadios[j].checked) {
      radioButtons.trolleyRadios[j].value === "return-trolley"
        ? userChoice.goodPoints++
        : userChoice.badPoints++;
      console.log(userChoice.badPoints, userChoice.goodPoints);
    }
  }
  for (let k = 0; k < radioButtons.moneyRadios.length; k++) {
    if (radioButtons.moneyRadios[k].checked) {
      radioButtons.moneyRadios[k].value === "give-back"
        ? userChoice.goodPoints++
        : userChoice.badPoints++;
      console.log(userChoice.badPoints, userChoice.goodPoints);
    }
  }
  for (let l = 0; l < radioButtons.doorRadios.length; l++) {
    if (radioButtons.doorRadios[l].checked) {
      radioButtons.doorRadios[l].value === "hold-open"
        ? userChoice.goodPoints++
        : userChoice.badPoints++;
      console.log(userChoice.badPoints, userChoice.goodPoints);
    }
  }
  fortuneDecider(userChoice.environmentType);
  console.log("submit button clicked");
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
