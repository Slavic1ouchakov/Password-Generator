var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var numbers = "1234567890".split("");
var symbols = "!@#$%^&*()_+-=".split("");

function generatePassword(){
var correctAnswer = false;
do {
  var length = prompt('How many characters do you wish to include?');
  if (length < 8){
    alert('Requires minimum of 8 characters!');
  }else if (length >128){
      alert('Maximum character lenth is 128!');
  }else if(isNaN(length) === true){
        alert('Must be a number entry!')
  }else correctAnswer = true;
      }
while (correctAnswer === false);
    
var optionUpperCase = confirm('Would you like to include uppercase characters?');
var optionLowerCase = confirm('Would you like to include lowercase characters?');
var optionNumbers = confirm('Would you like to include numbers?');
var optionSymbols = confirm('Would you like to include symbols?');

while (optionUpperCase === false &&
  optionLowerCase === false && 
  optionNumbers === false &&
  optionSymbols === false) {
    alert ('Select at least one type of character');
    optionUpperCase = comfirm('Would you like to include uppercase characters?')
    optionLowerCase = comfirm('Would you like to include lowercase characters?')
    optionNumbers = comfirm('Would you like to include numbers?')
    optionSymbols = comfirm('Would you like to include symbols?')
  }
 
  var chosenAnswers = {
    length: length,
    upper: optionUpperCase,
    lower: optionLowerCase,
    numb: optionNumbers,
    symbol: optionSymbols,
  }

  var possibleCharacters = [];
  var randomPassword = [];

  function getRandom(arrayName) {
    var randomElement = arrayName[Math.floor(Math.random() * arrayName.length)];
    return randomElement;
  }
  //connecting chosen answers
  if (chosenAnswers.upper) {
    randomPassword.push(getRandom(upperCase))
    possibleCharacters = possibleCharacters.concat(upperCase)
  }

  if (chosenAnswers.lower) {
    randomPassword.push(getRandom(lowerCase))
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }

  if (chosenAnswers.numeric) {
    randomPassword.push(getRandom(numbers))
    possibleCharacters = possibleCharacters.concat(numbers)
  }

  if (chosenAnswers.symbol) {
    randomPassword.push(getRandom(symbols))
    possibleCharacters = possibleCharacters.concat(symbols)
  }
    //creating new password
    var newPassword = "";

    for (i = 0; i < chosenAnswers.length; i++) {
      var chosen = getRandom(possibleCharacters)
      newPassword += chosen;
    }
  
    return newPassword;

}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);