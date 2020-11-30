const resetGame = document.getElementById('start');

let humanScore = 0;
let computerScore = 0;
const humanScore_span = document.getElementById('humanScore');
const computerScore_span = document.getElementById('computerScore');
const scoreBoard_div = document.querySelector(".score");
const resultText = document.querySelector('result > p')

const rockOption = document.getElementById('rock');
const paperOption = document.getElementById('paper');
const scissorsOption = document.getElementById('scissors');

function getComputerSelection (){
  const selections = ['rock', 'paper', 'scissors']
  const computerPlay = selections[Math.floor(Math.random()*selections.length)];
  return computerPlay;
}


function game (){
  function playRound(playerSelection, computerSelection)
{
if (playerSelection == 'rock' && computerSelection == 'scissors')
resultText.innerHTML = playerSelection + " beats " + computerSelection + " you got it";
else if (playerSelection == 'scissors' && computerSelection == 'paper') alert ('you win');
else if (playerSelection == 'paper' && computerSelection == 'rock') alert ('you won');
else if (playerSelection == computerSelection) alert ('draw');
else alert ('oh you LOSEEEEE!'); /*Shortens function, also appears with an error */
}




let selectMove = prompt ("enter move");
const playerSelection = selectMove.toLowerCase();
const computerSelection = getComputerSelection();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
}
for (var i = 0; i < 5; i++) {
  game();
}
