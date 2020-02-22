// Assignment Code
var generateBtn = document.querySelector("#generate");
var textAreaEl = document.querySelector('textarea');
var upperCaseBox = document.querySelector("#uppercaseBox");
var lowerCaseBox = document.querySelector("#lowercaseBox");
var numbersBox = document.querySelector("#numbersBox");
var specialCharactersBox = document.querySelector("#specialCharactersBox");
var formEl = document.querySelector("#myForm");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

upperCaseBox.addEventListener("click", function() {

});

lowerCaseBox.addEventListener("click", function() {

});

numbersBox.addEventListener("click", function() {

});

specialCharactersBox.addEventListener("click", function() {

});


// Add event listener to generate button
function generatePassword() {
  generateBtn.addEventListener("click", writePassword); {
    if(generateBtn === "click") {
      var askPrompt = "Which of these options would you like to include?";
      formEl.getElementById("show");
    } else {
      formEl.getElementById('#myForm').style.display; "block";
  } 
  }
}

textAreaEl.addEventListener("keyup", function(event) {
  var key = event.key.toLowerCase();
  var alphabetNumericSpecialCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()./,+".split("");
  var upperCase = event.key.toUpperCase();
  if (alphabetNumericCharacters.includes(key)) {
    event.forEach(function(element) {
      password.textContent += event.key;
      password.textContent += event.upperCase;
    });
  } 
});

