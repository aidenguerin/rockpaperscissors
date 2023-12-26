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

    let outcome = 0;

    console.log(`You play ${playerSelectionFormatted}`);
    console.log(`Computer plays ${computerSelection}`);

    // tie case
    if(playerSelectionFormatted == computerSelection) {
        console.log("It's a tie");
    }
    // win / loss case
    else { 
        if (winCase[playerSelectionFormatted] == computerSelection) {
            console.log("You win!");
            outcome = 1;
        } 
        else {
            console.log("You lose...");
            outcome = -1;
        }
    }
    return outcome
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to rock paper scissors.");
    console.log("Winner will be the best of 5 games.");

    // BO5 game loop
    for (let i = 0; i < 5; i++) {
        console.log(`Turn ${i + 1}`);
        console.log(`Player score : ${playerScore}, Computer score : ${computerScore}`)

        let playerSelection = prompt("Please enter your move:");
        let computerSelection = getComputerChoice();
        
        switch (playRound(computerSelection, playerSelection)) {
            case 1 : playerScore += 1;
            case -1 : computerScore += 1;
            case 0 : break // tie, do nothing 
        }
    }

    console.log("Final result is...")

    if (playerScore > computerScore) {
        console.log("You beat the computer!")
    }
    else if (playerScore == computerScore){
        console.log("You tied with the computer.")
    }   
    else {
        console.log("You lost to the computer...")
    }
}

const container = document.getElementById("container");

// p
const p = document.createElement("p");
p.style.cssText = "color: red;";
p.textContent = "Hello I'm red!";
container.appendChild(p);

// h3
const h3 = document.createElement("h3");
h3.style.cssText = "color: blue;";
h3.textContent = "I'm a blue H3";
container.appendChild(h3)

// div
const div = document.createElement("div");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p_2 = document.createElement("p");
p_2.textContent = "Me too!";

div.appendChild(h1);
div.appendChild(p_2);

container.appendChild(div);
