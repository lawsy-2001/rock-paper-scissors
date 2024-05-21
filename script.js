'use strict';

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else if (randomNum === 3) {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('Please choose either "rock", "paper" or "scissors"');
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a draw! you both chose ${humanChoice}`);
    playerMessage.textContent = `It's a draw! you both chose ${humanChoice}`;
    displayScores();
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    playerMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
    displayScores();
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    playerMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
    displayScores();
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    playerMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
    displayScores();
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    playerMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
    displayScores();
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    playerMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
    displayScores();
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    playerMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
    displayScores();
  }

  if (humanScore === 10) {
    hideUI();
    playerMessage.textContent = `YOU HAVE WON THE GAME! Player score: ${humanScore}, Computer score: ${computerScore}`;
  } else if (computerScore === 10) {
    hideUI();
    playerMessage.textContent = `THE COMPUTER HAS BEAT YOU! Player score: ${humanScore}, Computer score: ${computerScore}`;
  }
}

function displayScores() {
  playerScore.textContent = humanScore;
  compScore.textContent = computerScore;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  displayScores();
  displayUI();
  playerMessage.textContent = '';
}

function hideUI() {
  btnContainer.classList.add('hidden');
  scoreContainer.classList.add('hidden');
}

function displayUI() {
  btnContainer.classList.remove('hidden');
  scoreContainer.classList.remove('hidden');
}

// function playGame(){
// for(let i = 1; i <= 5; i++){
//     let humanSelection = getHumanChoice().toLowerCase();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
// }
// if (humanScore > computerScore) {
//     console.log(`You are the WINNER! your score: ${humanScore}, computer score: ${computerScore}`);
// } else if (computerScore > humanScore) {
//     console.log(`You have LOST! your score: ${humanScore}, computer score: ${computerScore}`);
// } else if (humanScore === computerScore){
//     console.log(`It's a DRAW! your score: ${humanScore}, computer score: ${computerScore}`);
// }
// }

// playGame();

const rockBtn = document.querySelector('.btn-rock');
const paperBtn = document.querySelector('.btn-paper');
const scissorsBtn = document.querySelector('.btn-scissors');
const resetBtn = document.querySelector('.btn-reset');
const playerMessage = document.querySelector('.player-message');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
const btnContainer = document.querySelector('.button-container');
const scoreContainer = document.querySelector('.score-container');

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () =>
  playRound('paper', getComputerChoice())
);
scissorsBtn.addEventListener('click', () =>
  playRound('scissors', getComputerChoice())
);

resetBtn.addEventListener('click', () => resetGame());
