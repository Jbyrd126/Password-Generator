var characterLength = 8;
var userArray = [];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "#", "$", "%", "~", "&", "%", "@", "*", "^"];
var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(generatePassword)

}

function generatePassword() {

}

function getPrompts() {
  characterLength = parseInt(prompt("How long do you want your password? (8 - 128 characters")); //how many chars does user want

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // if correct parameters are chosen these should be false
    alert("Character length must be from 8-128 characters. Please try again.")
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {

  }

}