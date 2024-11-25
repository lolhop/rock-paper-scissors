let computerChoice
let randomNumber
let humanChoice
let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
let playAgain


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = 'rock';
    }

    else if (randomNumber === 1) {
        computerChoice = 'scissors';
    }

    else {
        computerChoice = 'paper';
    }
  }

function getHumanChoice() {
    humanChoice = prompt(`What would you like to play? (Rock, Paper, Scissors)`).toLowerCase();
}

function gameLogic(){
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        alert('You win! Rock beats scissors!');
        humanScore = (humanScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        alert('You lose! Paper beats rock!');
        computerScore = (computerScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'rock' && computerChoice === 'rock'){
        alert(`It's a tie! Play again.`);
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        alert('You lose! Scissors beats paper!');
        computerScore = (computerScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        alert('You win! Paper beats rock!');
        humanScore = (humanScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'paper' && computerChoice === 'paper'){
        alert(`It's a tie! Play again.`);
    }

    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        alert('You lose! Scissors beats paper!');
        computerScore = (computerScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        alert('You win! Paper beats rock!');
        humanScore = (humanScore + 1);
        roundsPlayed = (roundsPlayed + 1);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
        alert(`It's a tie! Play again.`);
    }
}

function resetGame(){
    roundsPlayed = 0
    humanScore = 0
    computerScore = 0
    playRound();
}

function endGame(){
    if (humanScore > computerScore){
        if (confirm('You Win! Would you like to play again?') == true) {
            resetGame();
        } else {
            alert(`Thanks for playing!`);
        }
    }
    else {
        if (confirm('You Lose! Play again?') == true) {
            resetGame();
        } else {
            alert(`Thanks for playing!`);
        }
    }
}

function playRound(){

    getComputerChoice();

    getHumanChoice();

    gameLogic();

    if (roundsPlayed === 5){
        endGame();
    } else{
        playRound();
    }

}

playRound();