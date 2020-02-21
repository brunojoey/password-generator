// Assignment Code
var generateBtn = document.querySelector("#generate");
var textAreaEl = document.querySelector('textarea');
var upperCaseBox = document.querySelector("#uppercaseBox");
var lowerCaseBox = document.querySelector("#lowercaseBox");
var numbersBox = document.querySelector("#numbersBox");
var specialCharactersBox = document.querySelector("#specialCharactersBox");
var 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

textAreaEl.addEventListener("keyup", function(event) {
  var key = event.key.toLowerCase();
  var alphabetNumericSpecialCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()./,+".split("");
  var upperCase = event.key.toUpperCase();
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function(element) {
      element.textContent += event.key;
      element.textContent += event.upperCase;
    });
  } 
});