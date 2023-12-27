function getComputerChoice() {
    const move = Math.floor(Math.random()*3); // 0, 1 or 2

    switch (move) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function playRound(computerSelection, playerSelection) {
    let playerSelectionFormatted = playerSelection.toLowerCase()

    let winCase = { // playerSelection : computerSelection
        "rock" : "scissors",
        "scissors" : "paper",
        "paper" : "rock"
    }

    // tie case
    if(playerSelectionFormatted == computerSelection) {
    }
    // win / loss case
    else { 
        if (winCase[playerSelectionFormatted] == computerSelection) {
            playerScore += 1;
            document.getElementById("player-score").textContent = playerScore;
        } 
        else {
            computerScore += 1;
            document.getElementById("computer-score").textContent = computerScore;
        }
    }

    if(playerScore == 5) {
        results.textContent = `You win! ${playerScore}-${computerScore}`;
    }

    if(computerScore == 5) {
        results.textContent = `You lose... ${playerScore}-${computerScore}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = playerScore
    document.getElementById("computer-score").textContent = computerScore
}

let playerScore = 0;
let computerScore = 0;

// score display
const score = document.querySelector(".score");

// player choice buttons
const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

buttonRock.addEventListener('click', () => playRound(getComputerChoice(), "rock"));
buttonPaper.addEventListener('click', () => playRound(getComputerChoice(), "paper"));
buttonScissors.addEventListener('click', () => playRound(getComputerChoice(), "scissors"));

// results output
const results = document.querySelector(".results");
