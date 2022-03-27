var generateBtn = document.querySelector = ("#generate");

function writePassword(){
  var password = generatePassword();
  var passwordtext = document.querySelector("#password");

  passwordtext.value = password;
}
//Event listener. I'm having issues with it in my code

generateBtn.addEventListerner("click",writePassword);

//variable declaration 

var length;
var special_character;
var numeric_character;
var uppercase;
var lowercase;

//Value
var number = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var special_character = ("~","!", "@", "#", "$","%","^","&","*","-","+");
var lowercase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z");
var uppercase = ("A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z");
//confirm password length

var length = prompt("Please insert a password with a minimum of 8 characters and a maximum of 128");
console.log(length)
if(length > 8 || length <128){
  alert('Your password contains ${length} amount of characters');
}
else if(length < 8 || length > 128){
  alert('Your passowrd must be between 8-128 chacarter length!')
}
// Simplified my if else statements by utilizing or

//nested every other customization under this function
function generatePassword(){

  console.log("Lets make a password!");

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
var PromptThree= confirm();

if(PromptThree === lowercase){
  console.log('I want lowercase characters in my password');
}else {
  console.log('I DO NOT want lowercase characters in my password');
}

var PromptFour=confirm();

if(PromptFour === uppercase){
  console.log('I want uppercase characters in my password');
} else{
  console.log('I DO NOT want uppercase characters in my password');
}
//The user may or may not have wanted special characters but do they want numbers?
var promptFive = prompt("Would you like to include numeric characters in your password to make it more secure? If so click the ok button");

if(promptFive === numeric_character){
  console.log('I would like numeric characters')
} else{
  console.log('I would not like to make my password more secure with numeric characters');
}

// My tutor suggested I use Math.floor and Math.random
for (var i=0;i < length; i++){

// state variable selecteddecision, decision, decision.length, push
  var selecteddecision= decision[Math.floor(Math.random() * decision.length)];
  password.push(selecteddecision);
}

  return "You have genreated a password!"
}
//Might need to add a four loop here
