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

function getPlayerSelection() {
  rockOption.addEventListener('click', function game() {'rock'} );
  paperOption.addEventListener('click', function game() {'paper'} );
  scissorsOption.addEventListener('click', function game() {'scissors'} );
}

function clearScore(){
  resetGame.addEventListener('click', computerScore_span.innerHTML='0',
  humanScore_span.innerHTML='0');
}

function lose (){
  computerScore ++ ;
  computerScore_span.innerHTML;
  resultText.innerHTML = playerSelection + 'loses to ' + computerSelection;
}

function win (){
  humanScore ++;
  humanScore_span.innerHTML;
  resultText.innerHTML = playerSelection + 'beats ' + computerSelection;
}

function draw () {
  resultText.innerHTML = playerSelection + 'is equal to ' + computerSelection;
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection();
console.log(computerSelection);
console.log(playerSelection);


function game (){
  function playRound(playerSelection, computerSelection)
{
if (playerSelection == 'rock' && computerSelection == 'scissors')
win();
else if (playerSelection == 'scissors' && computerSelection == 'paper')
win();
else if (playerSelection == 'paper' && computerSelection == 'rock')
win();
else if (playerSelection == computerSelection)
draw();
else lose(); /*Shortens function, also appears with an error */
}
}
