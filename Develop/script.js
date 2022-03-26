var generateBtn = document.querySelector = ("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generating our button
generateBtn.addEventListener("clickbutton",writePassword);
// Write password to the #password input
/*Add a prompt for the user after activating the button*/
var characters = prompt("Please insert a password with a minimum of 8 characters and a maximum of 128");
/* Using if else statement will prompt the user to properly follow the guidelines for their password that we have stated above.*/

if(characters<8){
  alert("Please enter a password with a minimum of 8 characters");
} 
if (characters > 128){
  alert("Please enter a passoword with a maximum of 128 characters");
}
if(characters > 8){
  console.log('I would like ${characters} in my final password');
}
/* Now that our length constraints are set the user will have solidified their character*/

// Now to prompt the user for special characters
var special_character =true;
var promptTwo = prompt("If you would like to add special characters to make your password more secure please press the ok button");
//if else statements are needed for the user to decide if they want special characters
if(promptTwo === special_character){
  console.log('I would like to add special characters to my password');
} else{
  console.log('I would not like to make my passoword more secure with special characters')
}
//The user may like to add variety to their password by adding upper and lower case characters into their combination
var lowercase =true;
var PromptThree= confirm();

if(PromptThree === lowercase){
  console.log('I want lowercase characters in my password');
}else {
  console.log('I DO NOT want lowercase characters in my password');
}

var uppercase= true;
var PromptFour=confirm();

if(PromptFour === uppercase){
  console.log('I want uppercase characters in my password');
} else{
  console.log('I DO NOT want uppercase characters in my password');
}
//Might need to add a four loop here


//The user may or may not have wanted special characters but do they want numbers?

var  numeric_character = true;
var promptFive = prompt("Would you like to include numeric characters in your password to make it more secure? If so click the ok button");

if(promptFive === numeric_character){
  console.log('I would like numeric characters')
} else{
  console.log('I would not like to make my password more secure with numeric characters');
}