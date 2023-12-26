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