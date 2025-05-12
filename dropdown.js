const environDropdown = document.querySelector("#dropdown-environment");
const moralDropdown1 = document.querySelector("#dropdown-moral1");
const moralDropdown2 = document.querySelector("#dropdown-moral2");
const moralDropdown3 = document.querySelector("#dropdown-moral3");

const dropdownSymbol = "⬇️";
const pickupSymbol = "⬆️";

const dropdowns = [
  environDropdown,
  moralDropdown1,
  moralDropdown2,
  moralDropdown3,
];

const environContainer = document.querySelector("#environment-container");
const moral1Container = document.querySelector("#moral-part1-container");
const moral2Container = document.querySelector("#moral-part2-container");
const moral3Container = document.querySelector("#moral-part3-container");

const dropDownHandler = (dropdown) => {
  switch (dropdown) {
    case environDropdown:
      environContainer.classList.remove("hidden");
      environDropdown.innerHTML = pickupSymbol;
      break;
    case moralDropdown1:
      moral1Container.classList.remove("hidden");
      moralDropdown1.innerHTML = pickupSymbol;
      break;
    case moralDropdown2:
      moral2Container.classList.remove("hidden");
      moralDropdown2.innerHTML = pickupSymbol;
      break;
    case moralDropdown3:
      moral3Container.classList.remove("hidden");
      moralDropdown3.innerHTML = pickupSymbol;
      break;
  }
};

const pickUpHandler = (dropdown) => {
  switch (dropdown) {
    case environDropdown:
      environContainer.classList.add("hidden");
      environDropdown.innerHTML = dropdownSymbol;
      break;
    case moralDropdown1:
      moral1Container.classList.add("hidden");
      moralDropdown1.innerHTML = dropdownSymbol;
      break;
    case moralDropdown2:
      moralDropdown2.classList.add("hidden");
      moral2Container.innerHTML = dropdownSymbol;
      break;
    case moralDropdown3:
      moral3Container.classList.add("hidden");
      moralDropdown3.innerHTML = dropdownSymbol;
      break;
  }
};

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", () => {
    if (dropdowns[i].innerHTML === "⬇️") {
      dropDownHandler(dropdowns[i]);
    } else {
      pickUpHandler(dropdowns[i]);
    }
  });
}
