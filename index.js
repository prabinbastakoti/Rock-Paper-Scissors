
let choices = ['ROCK', 'PAPER', 'SCISSORS'];

// let userChoice = prompt("Rock, Paper , Scissors ?").toUpperCase(); 


function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    return (choices[choice]);
}

const computerChoice = getComputerChoice();
const userChoice = prompt("Rock, Paper , Scissors ?").toUpperCase(); 


function singleRound(userChoice, computerChoice) {
    
}