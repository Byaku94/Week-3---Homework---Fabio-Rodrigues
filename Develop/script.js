// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Adding the various arrays for the different types of characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "[", "]", "<", ">"];

//Prompts
var length = "";
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumbers = false;
var includeSpecialChars = false;

//This is our generatePassword function which is where the magic happens!
//Here you will se how I put the password together!
function generatePassword() {
//First we prompt our user how long he/she would like their password to be.
   var length = (prompt("How many characters should the password contain?"));

//Next we make sure the length of the password is within the criteria and if not, replay the first prompt back to user - Loop
   while(length <= 7 || length >= 129){
     alert("Password must be between 8 and 128 characters long. Please enter a valid input.");
     var length = (prompt("How many characters should the password contain?"));
  }
// Now we want to know what kind of character the user would like to include into his password.
//For this we will create 4 different prompts to confirm which characters are to be included.

   var includeLowerCase = confirm("Click the OK button if you would like to add lowercase letters to your password")
   var includeUpperCase = confirm("Click the OK button if you would like to add uppercase letters to your password")
   var includeNumbers = confirm("Click the OK button if you would like to add numbers to your password")
   var includeSpecialChars = confirm("Click the OK button if you would like to add special characters to your password")

//If all all values come up as false (or not confirmed). There must be at least 1 true value to get past this while loop. Also, send out an alert for the user to know something is wrong.
   while(includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSpecialChars === false) {
     alert("You must choose at least one character type")
     var includeLowerCase = confirm("Click the OK button if you would like to add lowercase letters to your password")
     var includeUpperCase = confirm("Click the OK button if you would like to add uppercase letters to your password")
     var includeNumbers = confirm("Click the OK button if you would like to add numbers to your password")
     var includeSpecialChars = confirm("Click the OK button if you would like to add special characters to your password")
  }

  
  //OK. Now that our prompts are done, how do we use this information?
  //Well, were going to create a personalized array of the characters that the user has selected!
  var userSelection = [];
  
  if(includeLowerCase){
    userSelection = userSelection.concat(lowerCase)
  }
  if(includeUpperCase){
    userSelection = userSelection.concat(upperCase)
  }
  if(includeNumbers){
    userSelection = userSelection.concat(numbers)
  }
  if(includeSpecialChars){
    userSelection = userSelection.concat(specialChars)
  }
}

