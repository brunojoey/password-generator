var getPassword = document.querySelector("#password");

var resultEL = document.getElementById('result');
var passwordLengthEl = document.getElementById('passwordLength');
var uppercaseEL = document.getElementById('uppercase');
var lowercaseEL = document.getElementById('lowercase');
var numbersEL = document.getElementById('numbers');
var symbolsEL = document.getElementById('symbols');
var generate = document.getElementById('generate');

var generateFunction = {
  lower:  getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generate.addEventListener("click", function() {
  var passwordLength = parseInt(passwordLengthEl.length);
})
console.log(length);

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}
function getRandomSymbol() {
  var symbol = '!@#$%^&*()./,<>=+'
  return symbol(Math.floor(Math.random() * symbol.length));
}