var generateEl = document.querySelector("#generate");
var lowercaseEl = document.querySelector("#lowercase");
var uppercaseEl = document.querySelector("#uppercase");
var symbolsEl = document.querySelector("#symbols");
var numbersEl = document.querySelector("#numbers");
var pwLength = document.querySelector("#pwLength");
var textAreaEl = document.querySelector("#password");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()+?><";

generateEl.addEventListener("click", function(e) {
  e.preventDefault();
  var emptyCharacters = "";
  if (lowercaseEl.checked) {
    emptyCharacters = emptyCharacters + letters;
  }
  if (uppercaseEl.checked) {
    emptyCharacters = emptyCharacters + letters.toUpperCase();
  }
  if (symbolsEl.checked) {
    emptyCharacters = emptyCharacters + symbols;
  }
  if (numbersEl.checked) {
    emptyCharacters = emptyCharacters + numbers;
  }
  if (pwLength < 8) {
    alert("You need more characters.")
  }
  if (pwLength > 128) {
    alert("You have too many characters.")
  }

  var length = emptyCharacters.length;
  var password = "";
  
  for (var i = 0; i < pwLength.value; i++) {
    var random = Math.floor(Math.random() * length);
    password += emptyCharacters[random];
    textAreaEl.value = password;
  }
});