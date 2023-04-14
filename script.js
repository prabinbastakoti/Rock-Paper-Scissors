
let result = document.querySelector('.result');
let userScoreElement = document.getElementById('userScore');
let computerScoreElement = document.getElementById('computerScore');
let userScore = 0;
let computerScore = 0;
userScoreElement.textContent = userScore;
computerScoreElement.textContent = computerScore;

function getInput(e) {

    // If user click on rock or paper or scissors then get userChoice
    if (e.target.id === 'rock' || e.target.id === 'paper' || e.target.id === 'scissors') {
        userChoice = e.target.id;

        // Get random computer choice 
        let choices = ['rock', 'paper', 'scissors'];
        let choice = Math.floor(Math.random() * 3);
        let computerChoice = choices[choice];


        if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
            result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
            userScore++;

        }

        else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
            result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
            computerScore++;

        }
        else if (userChoice === computerChoice) {
            result.textContent = `Tied!!`;
        }

        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;

        if (userScoreElement.textContent === '5') {
            result.innerHTML = "Congratulations! You Win! <br><br><a href='./'>Play Again!</a>";
            document.querySelector('.pick').style.display = 'none';
            document.querySelector('.choice').style.display = 'none';
            document.querySelector('.scores').style.display = 'none';
            return;
        }

        else if (computerScoreElement.textContent === '5') {
            result.innerHTML = "Better Luck Next Time!<br><br><a href='./'>Play Again!</a>";
            document.querySelector('.pick').style.display = 'none';
            document.querySelector('.choice').style.display = 'none';
            document.querySelector('.scores').style.display = 'none';
            return;
        }
    }
    // if user click somewhere else return
    else return;

};

window.addEventListener('click', getInput);



