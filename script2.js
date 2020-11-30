let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()* 3);
  return choices[randomNumber];
}
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " beats " + computerChoice + " you win";
}
function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerChoice + " beats " + userChoice + " you loose";
}
function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " is " + computerChoice + " you draw";
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
  win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
  lose(userChoice, computerChoice);
      break;
    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
  draw(userChoice, computerChoice);
      break;
  }
}

function main(){

  rock_div.addEventListener('click', function(){
    game("rock");
  })
  paper_div.addEventListener('click', function(){
    game("paper");
  })
  scissors_div.addEventListener('click', function(){
    game("scissors");
  })
}

main();
