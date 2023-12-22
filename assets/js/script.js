const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "#", "$", "%", "~", "&", "%", "@", "*", "^"];
const lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var generateBtn = document.querySelector("#generate"); // Assignment Code //
var characterLength = 0;
var userArray = [];
var ask = document.querySelector("#askagain");

generateBtn.addEventListener("click", writePassword); // Add event listner to start program when user clicks button//
generateBtn.addEventListener("click", clearText);

function getPrompts() {
  userArray = []; // start with empty array//
  characterLength = prompt("Man, how long you need this? (8 - 128 characters"); //Start by asking how many characters you want in the password//

  // if correct parameters are chosen these should be false//

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be from 8-128 characters. C'mon man!");
    return false;
  }

  //ask if they want these chars//
  if (confirm("Do you want lowercase letters in your password?")) {
    userArray = userArray.concat(lettersLowercase);
  }
  //ask if they want these chars//
  if (confirm("Do you want uppercase letters in your password?")) {
    userArray = userArray.concat(lettersUppercase);
  }
  //ask if they want these chars//
  if (confirm("Do you want numbers in your password?")) {
    userArray = userArray.concat(numbers);
  }
  //ask if they want these chars//
  if (confirm("Do you want symbols symbols in your password?")) {
    userArray = userArray.concat(symbols);
  }
  if (userArray.length != 0) {
    return true;
  } else {
    alert("You must choose a character.");

    return false;
  }
}

function clearText() { }

//creates password//
function generatePassword() {
  var password = "";

  //for loop to keep adding more chars//
  for (let i = 0; i < characterLength; i++) {
    let randomChar = Math.floor(Math.random() * userArray.length);

    // local var to hold userPassword//
    password += userArray[randomChar];
  }

  return password;
}

// Write password to @password input

function writePassword() {
  // whether user inputs allowed items in prompts//

  var allowedPrompts = getPrompts();
  // this is where we are going to drop the generated password
  var passwordText = document.querySelector("#password");

  if (allowedPrompts) {
    var userPassword = generatePassword();
    passwordText.value = userPassword;
  }
  if (userPassword) {
    ask.textContent = "Would you like another, Sir?";
  }

  //clears the box
  else {
    passwordText.value = "";
  }
}
