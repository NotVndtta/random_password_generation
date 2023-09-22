const passwordBox = document.querySelector("#password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "#$%_-<>^";

const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * symbol.length)];
    
    while(length>password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }

    passwordBox.value = password;

}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value);
  }