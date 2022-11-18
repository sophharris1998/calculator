const screenDisplay = document.querySelector("#display");
let storeNumber = 0;
let initalClick = true;
let lastStoredOperation = "";

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

//This is going to reset the storednumber back to 0
const clearDisplayStoredNumber = () => {
  storeNumber = 0;
  screenDisplay.innerText = "";
};

calcButtonClear.addEventListener("click", clearDisplayStoredNumber);

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
  lastStoredOperation = "+=";
};
calcButtonPlus.addEventListener("click", plusNumber);

//This makes the plus symbol work on the Calculator
const calcButtonMinus = document.querySelector("#calcButtonMinus");
const minusNumber = () => {
  if (initalClick == true) {
    storeNumber = parseInt(screenDisplay.innerText);
    initalClick = false;
  } else {
    storeNumber -= parseInt(screenDisplay.innerText);
  }
  clearDisplay();
  console.log(storeNumber);
  lastStoredOperation = "-=";
};
calcButtonMinus.addEventListener("click", minusNumber);

//This makes the multiply symbol work on the Calculator
const calcButtonTimes = document.querySelector("#calcButtonTimes");
const timesNumber = () => {
  if (initalClick == true) {
    storeNumber = parseInt(screenDisplay.innerText);
    initalClick = false;
  } else {
    storeNumber *= parseInt(screenDisplay.innerText);
  }
  clearDisplay();
  console.log(storeNumber);
  lastStoredOperation = "*=";
};
calcButtonTimes.addEventListener("click", timesNumber);

//This makes the divide symbol work on the Calculator
const calcButtonDivide = document.querySelector("#calcButtonDivide");
const divideNumber = () => {
  if (initalClick == true) {
    storeNumber = parseInt(screenDisplay.innerText);
    initalClick = false;
  } else {
    storeNumber /= parseInt(screenDisplay.innerText);
  }
  clearDisplay();
  console.log(storeNumber);
  lastStoredOperation = "/=";
};
calcButtonDivide.addEventListener("click", divideNumber);

//This makes the equals button show the result of the equation
const calcButtonEquals = document.querySelector("#calcButtonEquals");
const theAnswer = () => {
  if (lastStoredOperation == "+=") {
    plusNumber();
  }
  if (lastStoredOperation == "-=") {
    minusNumber();
  }
  if (lastStoredOperation == "*=") {
    timesNumber();
  }
  if (lastStoredOperation == "/=") {
    divideNumber();
  }
  screenDisplay.innerText = storeNumber;
};
calcButtonEquals.addEventListener("click", theAnswer);
