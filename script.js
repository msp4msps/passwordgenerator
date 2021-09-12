// Assignment Code

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var uppercase = alpha.toUpperCase();
var lowercase = alpha.toLowerCase();
var passwordText = document.querySelector("#password");
var includeNums = document.getElementById("numbers");
var includeSym = document.getElementById("symbols");
var includeUpper = document.getElementById("uppercase");
var includeLower = document.getElementById("lowercase");
var length = document.getElementById("length");

document
  .getElementById("generatePass")
  .addEventListener("click", definePassword);

function definePassword() {
  let characters = alpha;
  includeNums.checked ? (characters += numbers) : "";
  includeSym.checked ? (characters += symbols) : "";
  includeUpper.checked ? (characters += uppercase) : "";
  includeLower.checked ? (characters += lowercase) : "";
  passwordText.value = writePassword(length.value, characters);
  modal.style.display = "none";
}

// Write password to the #password input
function writePassword(length, characters) {
  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
