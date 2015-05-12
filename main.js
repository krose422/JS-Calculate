var answer = document.querySelector("#answer");
var calculateBtn = document.querySelector("#calculateBtn");
var numOne = document.querySelector("#num_one");
var numTwo = document.querySelector("#num_two");

function add(chosenNum1, chosenNum2) {
  var chosenNum1 = Number(numOne.value);
  var chosenNum2 = Number(numTwo.value);
  answer.innerHTML = chosenNum1 + chosenNum2;
  return chosenNum1 + chosenNum2;
}

calculateBtn.addEventListener("click", add);
