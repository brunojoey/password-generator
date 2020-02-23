var passwordLengthEl = document.getElementById('passwordLength').value;
var uppercaseEl = document.getElementById('uppercase').checked;
var lowercaseEl = document.getElementById('lowercase').checked;
var numbersEl = document.getElementById('numbers').checked;
var symbolsEl = document.getElementById('symbols').checked;
var generateEl = document.getElementById('generate');
console.log(uppercaseEl);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password
  for (var i = 0; i < passwordLength.length; i++){
    return (password);
  }
  function getUppercase() {
    var passwordText = document.querySelector("#password");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (uppercaseEl.checked === true) {
      passwordText.style.display = "block";
      return uppercase;
    } else {
      passwordText.style.display = "none";
    } 
  } passwordText = getUppercase();
  
}

function getUppercase() {
  var passwordText = document.querySelector("#password");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  if (uppercaseEl.checked === true) {
    passwordText.style.display = "block";
    return uppercase;
  } else {
    passwordText.style.display = "none";
  } 
} passwordText = getUppercase();

function getLowerCase() {
  var passwordText = document.querySelector("#password");
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
if (lowercaseEl.checked === true) {
  passwordText.style.display = "block";
  return lowercase;
} else {
  passwordText.style.display = "none";
} 
} passwordText = getLowerCase();

function getNumbers() {
  var passwordText = document.querySelector("#password");
  var numbers = "0123456789".split("");
  if (numbersEl.checked === true) {
    passwordText.style.display = "block";
    return numbers;
  } else {
    passwordText.style.display = "none";
  } 
} passwordText = getNumbers();

function getSymbols() {
  var passwordText = document.querySelector("#password");
  var symbols= "!@#$%^&**()./,+=".split("");
  if (symbolsEl.checked === true) {
    passwordText.style.display = "block";
    return symbols;
  } else {
    passwordText.style.display = "none";
  } 
} passwordTExt = getSymbols();

function getRandomLetters(max,min) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    var numbers = "0123456789".split("");
    var symbols= "!@#$%^&**()./,+=".split("");
    var lengthPw = Math.floor(Math.random() * (max - min + 1)) + min;
    var passwordRandom = Array(lengthPw).getElementById("uppercase", "lowercase", "numbers", "symbols", "passwordLength");
    return passwordRandom;
}

generateEl.addEventListener("click", function() {
  var passwordText = document.querySelector("#password");
  document.getElementById("password").value = passwordText;
});