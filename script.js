// console.log(Math.round(Math.random() * 2))

function getComputerChoice() {
    let computerGuess = Math.round(Math.random() * 2);
    if (computerGuess == 0) {
        computerGuess = "rock";
    }
    else if (computerGuess == 1) {
        computerGuess = "paper";
    } 
    else if (computerGuess == 2) {
        computerGuess = "scissors";
    }
    return computerGuess;  
}

function getPlayerChoice(){
    playerGuess = prompt("Choose one: Rock, Paper, Scissors");
    playerGuess = playerGuess.toLowerCase();
    return playerGuess;
}

function playRound(computerGuess, playerGuess){
    let winner;
    if (computerGuess == playerGuess){
        winner = "draw";
    }
    if (computerGuess == "rock" && playerGuess == "scissors") {
        winner = "computer";    
    }
    if (computerGuess == "scissors" && playerGuess == "paper") {
        winner = "computer";    
    }  
    if (computerGuess == "paper" && playerGuess == "rock") {
        winner = "computer";    
    }
    if (computerGuess == "rock" && playerGuess == "paper") {
        winner = "player";    
    }
    if (computerGuess == "paper" && playerGuess == "scissors") {
        winner = "player";    
    }
    if (computerGuess == "scissors" && playerGuess == "rock") {
        winner = "player";    
    }
    return winner;      
}

function game(){
    let compScore = 0;
    let playerScore = 0;
    while (compScore < 3 && playerScore < 3){
        winner = playRound(getComputerChoice(), getPlayerChoice());
        if (winner == "computer"){
            compScore++;
            console.log("Computer wins this round!");
        }
        if (winner == "player"){
            playerScore++
            console.log("You win this round!");
        }
        if (winner == "draw"){
            console.log("Draw!");
        }        
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    }

    if (playerScore == 3) {
        console.log("You won! :)");
    }
    if (compScore == 3) {
        console.log("You lost! :(");
    }
}

game();
// console.log(getPlayerChoice());
// console.log(getComputerChoice());
