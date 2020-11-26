//connecting player selection button
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener('click', Game);
paperButton.addEventListener('click', Game);
scissorsButton.addEventListener('click', Game);

function Game (){
  var selectMove = this.dataset.button;
  var playerSelection = selectMove.toLowerCase();

  //this is computerPlay.
  let selections = ['rock', 'paper', 'scissors']
  let computerPlay = selections[Math.floor(Math.random()*selections.length)];
  var computerSelection = computerPlay;

  function playRound(playerSelection, computerSelection)
{
  if (playerSelection == 'rock' && computerSelection == 'scissors') resultsArray.push ("you got it");
  else if (playerSelection == 'scissors' && computerSelection == 'paper') resultsArray.push ("you got it");
  else if (playerSelection == 'paper' && computerSelection == 'rock') resultsArray.push ("you got it");
  else if (playerSelection == computerSelection) resultsArray.push ('draw');
  else resultsArray.push ('oh you LOSEEEEE!'); /*Shortens function, also appears with an error */
}

  var resultsArray = [];
console.log(playerSelection);
console.log(computerSelection);
console.log(resultsArray);

};
//function gameLog() {
  //      var li = document.createElement('li');
    //    li.textContent = resultsArray[`${resultsArray.length -1}`];
    //  }

//if (resultsArray == 'you got it'|| resultsArray == 'you win' || resultsArray == 'you won')
//humanScore ++ ;
//else if (resultsArray == 'oh you LOSEEEEE!')
//computerScore ++;
