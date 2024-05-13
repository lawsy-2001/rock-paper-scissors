'use strict';

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) +1;
    if(randomNum === 1){
        return 'rock'
    } else if (randomNum === 2){
        return 'paper'
    } else if (randomNum === 3) {
        return 'scissors'
    }
}

function getHumanChoice(){
    return prompt('Please choose either "rock", "paper" or "scissors"')
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`It's a draw! you both chose ${humanChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);