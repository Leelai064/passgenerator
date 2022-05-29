var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");
var randomPass = [];
//Add event listener to generate button

generateBtn.addEventListener("click",writePassword);

//variables for characters chose in arrays!
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special_character = ["~","!", "@", "#", "$","%","^","&","*","-","+"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];

  //2. Validate the input: Collects answers based on the users selections
  var passchoice = [];

//function generates password
function generatePassword(){
 var isValid =false;
  //1. Prompt the user for the password criteria
  //  a. Password length 8< 128
  var length = prompt("Please insert a password with a minimum of 8 characters and a maximum of 128");
  if (length > 8 || length < 128){
    alert(`Your password contains ${length} characters`);
  } 
  if(length < 8 || length > 128){
    alert('Your password must be between 8-128 characters!');
    generatePassword();
  }else isValid = true; 
  //have a catch for when user doesn't pick between range
  if(isNaN(length)){
   return alert('You must insert a numbered length 8-128. Please click the Generate Password button and try again!');
  } 
   //  b. lowercase, uppercase, numbers, special characters
 var confirmnum = confirm("Would you like your password to contain numbers? If yes, click ok! If no, click cancel");
 var confirmspec= confirm("Would you like your password to contain special characters? If yes, click ok! If no, click cancel");
 var confirmlower = confirm("Would you like your password to contain lower case characters? If yes, click ok! If no, click cancel");
 var confirmupper = confirm("Would you like your password to contain upper case characters? If yes, click ok! If no, click cancel");
  //3. Generate password base on criteria.
 if (confirmnum){
   passchoice.push(...number);
 }
 if(confirmspec){
   passchoice.push(...special_character);
 }
 if(confirmlower){
   passchoice.push(...lowercase);
 }
 if(confirmupper){
   passchoice.push(...uppercase);
 }

if (confirmnum == false &&
    confirmspec == false &&
    confirmlower == false &&
    confirmupper == false){
     return alert('Please select at least one constraint for your password');
    }

//4. Display password to the page. (our return is already complete)
  
for(var i= 0; i<length; i++){
  var item = passchoice[Math.floor(Math.random()*passchoice.length)];
  randomPass.push(item);
}
//remember to make a global string randomPass!
return randomPass.join("");
}

console.log(randomPass + "Hello World");
//Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function resetpass(){
  document.getElementById("password").reset();
}