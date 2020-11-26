//connecting player selection button
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener('click', Game);
paperButton.addEventListener('click', Game);
scissorsButton.addEventListener('click', Game);


function Game (){
  var playerSelection = this.dataset.button.toLowerCase();

  var userScore = document.querySelector('.user-score');
  var computerScore = document.querySelector('.computer-score');

var resultsArray = [];

  //this is computerPlay.
  let selections = ['rock', 'paper', 'scissors']
  let computerPlay = selections[Math.floor(Math.random()*selections.length)];
  var computerSelection = computerPlay;

playRound();

  function playRound()
{
  if (playerSelection == 'rock' && computerSelection == 'scissors') resultsArray.push ("you got it");
  else if (playerSelection == 'scissors' && computerSelection == 'paper') resultsArray.push ("you win");
  else if (playerSelection == 'paper' && computerSelection == 'rock') resultsArray.push ("you won");
  else if (playerSelection == computerSelection) resultsArray.push ('draw');
  else resultsArray.push ('oh you LOSEEEEE!'); /*Shortens function, also appears with an error */
}


console.log(playerSelection);
console.log(computerSelection);
console.log(resultsArray);


roundScore();
function roundScore(){
  while (userScore < 5 && computerScore < 5){
    if (resultsArray == 'you got it'|| resultsArray == 'you win' || resultsArray == 'you won')
    {
      userScore++;
      userScore.textContent = `${userScore}`;
    }
    else if (resultsArray == 'oh you LOSEEEEE!'){
      computerScore ++;
      computerScore.textContent = `${computerScore}`;
    }
    console.log(userScore);
    console.log(computerScore);
    }
  }
};
