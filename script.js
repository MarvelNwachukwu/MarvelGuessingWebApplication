var randomNumber = Math.floor( Math.random() * 1000);
var Name = prompt('What is your name?');
var UserInput = prompt ('Think of a number between 1 and 1000');
var userInputToFloat = parseFloat(UserInput);
const writeInDiv = document.getElementById('app');


console.log(randomNumber);


if (userInputToFloat === randomNumber){
 writeInDiv.innerHTML = `Brilliant minds will always win. I'm so proud of you, ${Name}y. <br><br> DM me with a screenshot of this page, I owe you. `
}else{
  writeInDiv.innerHTML = `Come on ${Name}, you can guess something better than ${UserInput}. By the way, the number was ${randomNumber}.<br><br><br> Why don't you try again.`
};
