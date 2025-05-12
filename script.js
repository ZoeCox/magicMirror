import { responses } from "./fortuneVals.js";

const mirrorContainer = document.querySelector("#mirror-container");
const submitBtn = document.querySelector("#submit-button");
const resetBtn = document.querySelector("#reset-button");
const questionSection = document.querySelector("#user-question-section");
const nameInput = document.querySelector("#user-name-input");
const nameSubmit = document.querySelector("#name-submit");
const nameLabel = document.querySelector("#user-name-label");
let userName;

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
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.negative.alone;
        break;
      case "business":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.negative.business;
        break;
      case "creative":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.negative.creative;
        break;
      case "farm":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.negative.farm;
        break;
      case "family":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.negative.family;
        break;
    }
  }
  if (userChoice.goodPoints > userChoice.badPoints) {
    questionSection.classList.add("hidden");
    mirrorContainer.classList.remove("hidden");
    switch (environmentAnswer) {
      case "alone":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.positive.alone;
        break;
      case "business":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.positive.business;
        break;
      case "creative":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.positive.creative;
        break;
      case "farm":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.positive.farm;
        break;
      case "family":
        mirrorContainer.innerHTML =
          `${userName}:` + " " + responses.positive.family;
        break;
    }
  }
};

nameSubmit.addEventListener("click", () => {
  if (nameInput.value !== undefined && nameInput.value !== "") {
    userName = nameInput.value;
    nameSubmit.classList.add("hidden");
    nameInput.classList.add("hidden");
    nameLabel.classList.add("hidden");
  }
});

submitBtn.addEventListener("click", () => {
  resetBtn.classList.remove("hidden");
  for (let i = 0; i < radioButtons.environmentRadios.length; i++) {
    if (radioButtons.environmentRadios[i].checked) {
      userChoice.environmentType = radioButtons.environmentRadios[i].value;
    }
  }
  for (let j = 0; j < radioButtons.trolleyRadios.length; j++) {
    if (radioButtons.trolleyRadios[j].checked) {
      radioButtons.trolleyRadios[j].value === "return-trolley"
        ? userChoice.goodPoints++
        : userChoice.badPoints++;
    }
  }
  for (let k = 0; k < radioButtons.moneyRadios.length; k++) {
    if (radioButtons.moneyRadios[k].checked) {
      radioButtons.moneyRadios[k].value === "give-back"
        ? userChoice.goodPoints++
        : userChoice.badPoints++;
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
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
