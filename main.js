var answer = document.querySelector("#answer");
var addBtn = document.querySelector("#addBtn");
var subtractBtn = document.querySelector("#subtractBtn");
var multiplyBtn = document.querySelector("#multiplyBtn");
var divideBtn = document.querySelector("#divideBtn");
var numOne = document.querySelector("#num_one");
var numTwo = document.querySelector("#num_two");

function add(chosenNum1, chosenNum2) {
  var chosenNum1 = Number(numOne.value);
  var chosenNum2 = Number(numTwo.value);
  answer.innerHTML = chosenNum1 + chosenNum2;
  return chosenNum1 + chosenNum2;
}

function subtract(chosenNum1, chosenNum2) {
  var chosenNum1 = Number(numOne.value);
  var chosenNum2 = Number(numTwo.value);
  answer.innerHTML = chosenNum1 - chosenNum2;
  return chosenNum1 - chosenNum2;
}

function multiply(chosenNum1, chosenNum2) {
  var chosenNum1 = Number(numOne.value);
  var chosenNum2 = Number(numTwo.value);
  answer.innerHTML = chosenNum1 * chosenNum2;
  return chosenNum1 * chosenNum2;
}

function divide(chosenNum1, chosenNum2) {
  var chosenNum1 = Number(numOne.value);
  var chosenNum2 = Number(numTwo.value);
  answer.innerHTML = chosenNum1 / chosenNum2;
  return chosenNum1 / chosenNum2;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
