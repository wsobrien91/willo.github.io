// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  const upperCase = "ABCDEFGHIJKLMNOP"

  const randomCharacter = upperCase[Math.floor(Math.random() * upperCase.length)]

//  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
