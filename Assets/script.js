var getPassword = document.querySelector("#password");
var passwordLengthEl = document.getElementById('passwordLength');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

var randomFunction = {
  lower:  getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listener
generateEl.addEventListener('click', function() {
  var length = parseInt(passwordLengthEl.length);
  var hasUpper = uppercaseEl.checked;
  var hasLower = lowercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  
  getPassword.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
    );
});

// Generate password function
function generatePassword(upper, lower, symbol, length, number) {
  // 1. initialize password variable
  // 2. Filter out unchecked types
  // 3. Loop over length. Call generator function for each type
  // 4. Add final password to the password variable and return it

  var generatedPassword = " ";

  var typesCount = upper + lower + symbol + length + number;
  console.log("Types Count: ", typesCount)

  var typesArr = [{upper}, {lower}, {number}, {symbol}];
  console.log("typesArr: ", typesArr);
}

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
  var symbol = '!@#$%^&*()./,<>=+';
  return symbol[Math.floor(Math.random() * symbol.length)];
}
