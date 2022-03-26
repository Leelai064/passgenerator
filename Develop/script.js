var generateBtn = document.querySelector = ("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generating our button
generateBtn.addEventListener("clickbutton",writePassword);
// Write password to the #password input
//Add a prompt for the user after activating the button
var characters = prompt("Please insert a password with a minimum of 8 characters and a maximum of 128");
// Using if else statement will prompt the user to properly follow the guidelines for their password that we have stated above.

if(characters<8){
  alert("Please enter a password with a minimum of 8 characters");
} 
if (characters > 128){
  alert("Please enter a passoword with a maximum of 128 characters");
}
if(characters > 8){
  console.log('I would like ${characters} in my final password')
}
// Now that our length constraints are set the user will have solidified their character



// Below is the prompt I think would allow the user to have the computer make a pass. From there how do I make it randomly generate? (for loop of course and if else statement?)
// var userpass = prompt("Generate a password or create your own?");
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
