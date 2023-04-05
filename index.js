
let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return (choices[choice]);
}

let result; 
// play a single round
function singleRound(userChoice, computerChoice) {
    if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You Win! ${userChoice} beats ${computerChoice}`);
        // result = true;
        return true;
    }

    else if ((userChoice === "Rock" && computerChoice === "Paper") || (userChoice === "Paper" && computerChoice === "Scissors") || (userChoice === "Scissors" && computerChoice === "Rock")) {
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
        // result = false;
        return false;
    }

    else if (userChoice === computerChoice) {
        console.log(`Tied!`);
    }

    else {
        console.log("Something Went Wrong!");
    }
}


function game() {

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();

        // prompt user for a input
        const userInput = prompt("Rock, Paper , Scissors ?");
        let userChoice;

        // get user input and choose a valid choices 
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].toUpperCase() === userInput.toUpperCase()) {
                userChoice = choices[i];
            }
        }
        let result =  singleRound(userChoice, computerChoice);

        if ( result === true) {
            userScore++;
        }
        else if (result === false) {
            computerScore++;
        }
        
        console.log(`Your Score: ${userScore}`);
        console.log(`Computer Score: ${computerScore}`);
        

    }

    if (userScore > computerScore) {
        alert("You win Champ!");
    }

    else if (userScore < computerScore) {
        alert("Loser!");
    }

    else if(userScore === computerScore)
    {
        alert ("Tied with a bot. What a loser!");
    }
}


game();