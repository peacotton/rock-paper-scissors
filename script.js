let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener('click', playGame));

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

const scoreboard = document.querySelector("#scoreboard");
scoreboard.style.cssText = 'border: solid black; background: pink';

const score = document.createElement('p');
score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);

const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const roundStatus = document.createElement('p');

scoreboard.appendChild(score);
scoreboard.appendChild(playerChoice);
scoreboard.appendChild(computerChoice);
scoreboard.appendChild(roundStatus);

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

function playGame(e, computerGuess) {
    playerGuess = this.id;
    playerChoice.textContent = (`You chose: ${playerGuess}`);
    computerGuess = getComputerChoice();
    computerChoice.textContent = (`Computer chose: ${computerGuess}`);
    playRound(playerGuess, computerGuess);
}

function playRound(playerGuess, computerGuess){
    if (computerGuess == playerGuess){
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND DRAW!");
    }
    if (computerGuess == "rock" && playerGuess == "scissors") {
        computerScore++;
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);  
        roundStatus.textContent = ("ROUND LOSE!");  
    }
    if (computerGuess == "scissors" && playerGuess == "paper") {
        computerScore++; 
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND LOSE!");  
    }  
    if (computerGuess == "paper" && playerGuess == "rock") {
        computerScore++;  
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND LOSE!");  
    }
    if (computerGuess == "rock" && playerGuess == "paper") {
        playerScore++; 
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND WIN!");  
    }
    if (computerGuess == "paper" && playerGuess == "scissors") {
        playerScore++;
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND WIN!"); 
    }
    if (computerGuess == "scissors" && playerGuess == "rock") {
        playerScore++;
        score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
        roundStatus.textContent = ("ROUND WIN!"); 
    }   
    if (computerScore == 3) {
        computerChoice.textContent = ("");
        playerChoice.textContent = ("");
        roundStatus.textContent = ("YOU LOSE!!!");
        buttons.forEach(button => button.removeEventListener('click', playGame));
    }
    if (playerScore == 3) {
        computerChoice.textContent = ("");
        playerChoice.textContent = ("");
        roundStatus.textContent = ("YOU WIN!!!");
        buttons.forEach(button => button.removeEventListener('click', playGame));
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    score.textContent = (`Computer: ${computerScore} | Player: ${playerScore}`);
    computerChoice.textContent = ("");
    playerChoice.textContent = ("");
    roundStatus.textContent = ("");
    buttons.forEach(button => button.addEventListener('click', playGame)); 
}
