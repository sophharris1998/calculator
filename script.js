const screenDisplay = document.querySelector("#display");
let storeNumber = 0;
let initalClick = true;
let lastStoredOperation = "";
let inputNumberPrimary = 0;
let inputNumberSecondary = 0;
let operation = "";
let displayingAnswer = false;

//This makes all numbers display when clicked
// We are getting all of the calculator number buttons
const buttonsArray = document.querySelectorAll("#calcButton");

// Writing a fuction to say when you press a numbered button it should dispay this number on the calculator screen
const buttonNumberDisplay = (button) => {
  //An answer is displayed, when another button is pressed...
  if (displayingAnswer == true) {
    //The screen will clear but the console will still store the answer
    clearDisplay();
  }
  // When a number is pressed it adds onto the string on the screen
  screenDisplay.innerText += button.innerText;
};

// looping through numbered buttons and when clicked displaying them to the Calculator Display
for (let index = 0; index < buttonsArray.length; index++) {
  buttonsArray[index].addEventListener("click", function () {
    buttonNumberDisplay(buttonsArray[index]);
  });
}

// The function clearDisplay means dispay an empty string
const clearDisplay = () => {
  screenDisplay.innerText = "";
};

// going back to HTML and finding calcButtonClear,
const calcButtonClear = document.querySelector("#calcButtonClear");
//clearDisplayStored number is another function that runs when we click the C button. Resets everything back to 0 and doesn't display answer anymore.
const clearDisplayStoredNumber = () => {
  storeNumber = 0;
  screenDisplay.innerText = "0";
  inputNumberPrimary = 0;
  inputNumberSecondary = 0;
  displayingAnswer = false;
};
//event listener allows the function to run when clear is clicked
calcButtonClear.addEventListener("click", clearDisplayStoredNumber);

//refers back to the HTML calcButtonPlus
const calcButtonPlus = document.querySelector("#calcButtonPlus");
const plusNumber = () => {
  if (displayingAnswer == true) {
    inputNumberPrimary == parseInt(screenDisplay.innerText);
    inputNumberSecondary = 0;
    displayingAnswer = false;
  } else if (inputNumberPrimary == 0) {
    inputNumberPrimary = parseInt(screenDisplay.innerText);
  } else {
    inputNumberSecondary = parseInt(screenDisplay.innerText);
  }
  console.log(inputNumberPrimary);
  console.log(inputNumberSecondary);
  lastStoredOperation = "+=";
  clearDisplay();
  if (inputNumberPrimary != 0 && inputNumberSecondary != 0) {
    inputNumberPrimary = inputNumberPrimary + inputNumberSecondary;
    screenDisplay.innerText = inputNumberPrimary;
    displayingAnswer = true;
    inputNumberSecondary = 0;
  }
};
calcButtonPlus.addEventListener("click", plusNumber);

//This makes the plus symbol work on the Calculator
const calcButtonMinus = document.querySelector("#calcButtonMinus");
const minusNumber = () => {
  if (displayingAnswer == true) {
    inputNumberPrimary == parseInt(screenDisplay.innerText);
    inputNumberSecondary = 0;
    displayingAnswer = false;
  } else if (inputNumberPrimary == 0) {
    inputNumberPrimary = parseInt(screenDisplay.innerText);
  } else {
    inputNumberSecondary = parseInt(screenDisplay.innerText);
  }
  console.log(inputNumberPrimary);
  console.log(inputNumberSecondary);
  lastStoredOperation = "-=";
  clearDisplay();
  if (inputNumberPrimary != 0 && inputNumberSecondary != 0) {
    inputNumberPrimary = inputNumberPrimary - inputNumberSecondary;
    screenDisplay.innerText = inputNumberPrimary;
    displayingAnswer = true;
    inputNumberSecondary = 0;
  }
};
calcButtonMinus.addEventListener("click", minusNumber);

//This makes the multiply symbol work on the Calculator
const calcButtonTimes = document.querySelector("#calcButtonTimes");
const timesNumber = () => {
  if (displayingAnswer == true) {
    inputNumberPrimary == parseInt(screenDisplay.innerText);
    inputNumberSecondary = 0;
    displayingAnswer = false;
  } else if (inputNumberPrimary == 0) {
    inputNumberPrimary = parseInt(screenDisplay.innerText);
  } else {
    inputNumberSecondary = parseInt(screenDisplay.innerText);
  }
  console.log(inputNumberPrimary);
  console.log(inputNumberSecondary);
  lastStoredOperation = "*=";
  clearDisplay();
  if (inputNumberPrimary != 0 && inputNumberSecondary != 0) {
    inputNumberPrimary = inputNumberPrimary * inputNumberSecondary;
    screenDisplay.innerText = inputNumberPrimary;
    displayingAnswer = true;
    inputNumberSecondary = 0;
  }
};
calcButtonTimes.addEventListener("click", timesNumber);

//This makes the divide symbol work on the Calculator
const calcButtonDivide = document.querySelector("#calcButtonDivide");
const divideNumber = () => {
  if (displayingAnswer == true) {
    inputNumberPrimary == parseInt(screenDisplay.innerText);
    inputNumberSecondary = 0;
    displayingAnswer = false;
  } else if (inputNumberPrimary == 0) {
    inputNumberPrimary = parseInt(screenDisplay.innerText);
  } else {
    inputNumberSecondary = parseInt(screenDisplay.innerText);
  }
  console.log(inputNumberPrimary);
  console.log(inputNumberSecondary);
  lastStoredOperation = "/=";
  clearDisplay();
  if (inputNumberPrimary != 0 && inputNumberSecondary != 0) {
    inputNumberPrimary = inputNumberPrimary / inputNumberSecondary;
    screenDisplay.innerText = inputNumberPrimary;
    displayingAnswer = true;
    inputNumberSecondary = 0;
  }
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

  console.log(inputNumberPrimary);
};
calcButtonEquals.addEventListener("click", theAnswer);
