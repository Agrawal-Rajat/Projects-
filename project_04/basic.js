const form = document.querySelector("form");
const randomNumber = Math.floor(Math.random() * 100) + 1;
let prevGuess = [];
let count = 0;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = parseInt(document.querySelector("#guessed").value);

  const message = document.querySelector("#message");

  if (input < 1 || input > 100 || isNaN(input)) {
    message.innerHTML = "Invalid Input";
  } 
  else {
      if (input < randomNumber) {
        message.innerHTML = "input is smaller than number";
        prevGuess.push(input);
        count++;
      } 
      else if (input > randomNumber) {
        message.innerHTML = "input is bigger than number";
        prevGuess.push(input);
        count++;
      } 
      else {
        message.innerHTML = "Guessed right";
        prevGuess.push(input);
        count++;
      }   
  }
});
