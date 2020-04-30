var randomNumber = Math.floor( Math.random() * 7);
var UserInput = prompt ('Think of a number between 1 and 10');
var userInputToFloat = parseFloat(UserInput);
const writeInDiv = document.getElementById('app');

if (userInputToFloat ===randomNumber){
 writeInDiv.innerHTML = 'Right as rain!'
}else{
  writeInDiv.innerHTML = `OMG! I can't believe you did it. <br><br><br><br> Just being sarcastic, you were wrong. Guess again` 
}