var passwordLengthEl = document.getElementById('passwordLength');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password
  for (var i = 0; i < passwordLength.length; i++){
    return (password);
  }
  console.log(passwordLengthEl);
  writePassword();
}

function getUppercase() {
  var passwordText = document.querySelector("#password");
  if (uppercaseEl.checked === true) {
    passwordText.style.display = "block";
  } else {
    passwordText.style.display = "block";
  } 
} getUppercase();

function getLowerCase() {
  var passwordText = document.querySelector("#password");
if (lowercaseEl.checked === true) {
  passwordText.style.display = "block";
} else {
  passwordText.style.display = "block";
} 
} getLowerCase();

function getNumbers() {
  var passwordText = document.querySelector("#password");
  if (numbersEl.checked === true) {
    passwordText.style.display = "block";
  } else {
    passwordText.style.display = "block";
  } 
} getNumbers();

function getSymbols() {
  var passwordText = document.querySelector("#password");
  if (symbolsEl.checked === true) {
    passwordText.style.display = "block";
  } else {
    passwordText.style.display = "block";
  } 
} getSymbols();

function getRandomLetters(max,min) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    var numbers = "0123456789".split("");
    var symbols= "!@#$%^&**()./,+=".split("");
    var lengthPw = Math.floor(Math.random(passwordLengthEl) * (max - min + 1)) + min;
    var passwordRandom = Array(lengthPw).getElementById("uppercase", "lowercase", "numbers", "symbols", "passwordLength");
    return passwordRandom;
}

generateEl.addEventListener("click", function() {
  var passwordText = document.querySelector("#password");
  document.getElementById("password").value = passwordText;
});

