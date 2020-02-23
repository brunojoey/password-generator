var getPassword = document.querySelector("#password");
var passwordLengthEl = document.getElementById('passwordLength');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');


// function getRandomLetters(max,min) {
//     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
//     var numbers = "0123456789".split("");
//     var symbols= "!@#$%^&**()./,+=".split("");
//     var lengthPw = Math.floor(Math.random(passwordLengthEl) * (max - min + 1)) + min;
//     var passwordRandom = Array(lengthPw).textContent(uppercase, lowercase, numbers, symbols);
//     return passwordRandom;
// }

// generateEl.addEventListener("click", function(){
//     document.getElementById("password").textContent = getPassword;
// });


// generateEl.addEventListener("click", function() {
//   document.getElementById("password").value = getPassword;
// });

function getUppercase() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  if (uppercaseEl.checked === true) {
    getPassword.style.display = "block";
} else {
  uppercaseEl.style.display = "none";
}
}

function getLowerCase() {
  if (lowercaseEl.checked === true) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    getPassword.style.display = "block";
} else {
  lowercaseEl.style.display = "none";
}
}

function getNumbers() {
  if (numbersEl.checked === true) {
    var numbers = "0123456789".split("");
    getPassword.style.display = "block";
} else {
  numbersEl.style.display = "none";
}
}

function getSymbols() {
  var symbols = "!@#$%^&**()./,+=".split("");
  if (symbolsEl.checked === true) {
    getPassword.style.display = "block";
} else {
  symbolsEl.style.display = "none";
}
}

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
