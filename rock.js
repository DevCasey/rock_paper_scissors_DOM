let gameChoice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay(playerSelection, computerSelection) {
	let randomNumber = Math.floor(Math.random()*gameChoice.length);
	return gameChoice[randomNumber];
}

function playGame(playerSelection, computerSelection) {
	playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
	computerSelection = computerPlay();
	if (playerSelection === "rock" && computerSelection === "scissors" ||
		playerSelection === "scissors" && computerSelection === "paper"||
		playerSelection === "paper" && computerSelection === "rock") {
			playerScore += 1;
			return playerSelection + " beats " + computerSelection + ".";
	} else if (playerSelection === "scissors" && computerSelection === "rock" ||
			   playerSelection === "rock" && computerSelection === "paper" ||
			   playerSelection === "paper" && computerSelection === "scissors") {
				   computerScore += 1;
				   return playerSelection + " loses to " + computerSelection + ".";
			   } else {
				   return "Draw";
			   }
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playGame());
	}
	if (playerScore > computerScore) {
		console.log(`Player wins with ${playerScore} points!`);
	} else if (computerScore > playerScore) {
		console.log(`Computer wins with ${computerScore} points!`);
	}
}
	
	