// Assignment code here

function generatePassword() {
  let passwordLength = prompt("Enter the desired password length between 8 and 128 characters:");
  passwordLength = parseInt(passwordLength);

  // Check if the entered password length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string for an invalid password length
  }

  const useLowercase = confirm("Include lowercase characters?");
  const useUppercase = confirm("Include uppercase characters?");
  const useNumeric = confirm("Include numeric characters?");
  const useSpecialChars = confirm("Include special characters?");

  // Check if the user has selected at least one character type
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecialChars) {
    alert("Please select at least one character type.");
    return ""; // Return an empty string if no character type is selected
  }

  let password = "";
  let characterSet = "";

  // Build the character set based on user preferences
  if (useLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumeric) {
    characterSet += "0123456789";
  }
  if (useSpecialChars) {
    characterSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  const characterSetLength = characterSet.length;

  // Generate the random password
  for (i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSetLength);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
