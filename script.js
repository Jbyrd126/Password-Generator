var characterLength = 8;
var userArray = [];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbols = ['!', '#', '$', '%', '~', '&', '%', '@', '*', '^'];
const lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listner to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to @password input
function writePassword() {
  var allowedPrompts = getPrompts();  // whether user inputs allowed items in prompts
  var passwordText = document.querySelector("#password");

  if (allowedPrompts) {
    var userPassword = generatePassword();
    passwordText.value = userPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {  //for loop to keep adding more chars
    var randomChar = Math.floor(Math.random() * userArray.length);
    password = password + userArray[randomChar]; // local var to hold userPassword

  }
  return password;
}

function getPrompts() {
  userArray = []; // start with empty array

  characterLength = parseInt(prompt("How long do you want your password? (8 - 128 characters")); //how many chars does user want

  if (characterLength) characterLength <= 8  characterLength >= 128) {  // if correct parameters are chosen these should be false
    alert("Character length must be from 8-128 characters. C'mon man!")
    return false;
  }
  if (confirm("Do you want lowercase letters in your password?")) {    //ask if they want these chars
    userArray = userArray.concat(lettersLowercase);

  }

  if (confirm("Do you want uppercase letters in your password?")) {   //ask if they want these chars
    userArray = userArray.concat(lettersUppercase);

  }

  if (confirm("Do you want numbers in your password?")) {   //ask if they want these chars 
    userArray = userArray.concat(numbers);

  }
  if (confirm("Do you want symbols symbols in your password?")) {    //ask if they want these chars
    userArray = userArray + (symbols);

  }
  return true;



}