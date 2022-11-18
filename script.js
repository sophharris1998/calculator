const screenDisplay = document.querySelector("#display");
let storeNumber = 0;

let initalClick = true;

//This makes all numbers display when clicked
const buttonsArray = document.querySelectorAll("#calcButton");
const buttonNumberDisplay = (button) => {
  screenDisplay.innerText += button.innerText;
};
for (let index = 0; index < buttonsArray.length; index++) {
  buttonsArray[index].addEventListener("click", function () {
    buttonNumberDisplay(buttonsArray[index]);
  });
}

//This makes the C button clear what is on the calculator display
const calcButtonClear = document.querySelector("#calcButtonClear");
const clearDisplay = () => {
  screenDisplay.innerText = "";
};
calcButtonClear.addEventListener("click", clearDisplay);

//This makes the plus symbol work on the Calculator
const calcButtonPlus = document.querySelector("#calcButtonPlus");
const plusNumber = () => {
  if (initalClick == true) {
    storeNumber = parseInt(screenDisplay.innerText);
    initalClick = false;
  } else {
    storeNumber += parseInt(screenDisplay.innerText);
  }
  clearDisplay();
  console.log(storeNumber);
};
calcButtonPlus.addEventListener("click", plusNumber);

//This makes the plus symbol work on the Calculator
const calcButtonMinus = document.querySelector("#calcButtonMinus");
const minusNumber = () => {
  storeNumber -= parseInt(screenDisplay.innerText);
  clearDisplay();
  console.log(storeNumber);
};
calcButtonMinus.addEventListener("click", minusNumber);
