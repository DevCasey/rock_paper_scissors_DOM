let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let message = document.querySelector('#message');

let btn1 = document.querySelector('.rockb');
btn1.addEventListener('click', playRock);

let btn2 = document.querySelector('.paperb');
btn2.addEventListener('click', playPaper);

let btn3 = document.querySelector('.scissorsb')
btn3.addEventListener('click', playerScissors);

let gameChoice = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

function computerPlay(playerSelection, computerSelection) {
	let randomNumber = Math.floor(Math.random()*gameChoice.length);
	return gameChoice[randomNumber];
}



// Play Rock Paper and Scissors functions
function playRock() {
	let computerSelection = computerPlay();
	playGame("Rock", computerSelection);
}


function playPaper() {
	let computerSelection = computerPlay();
	playGame("Paper", computerSelection);
}

function playerScissors() {
	let computerSelection = computerPlay();
	playGame("Scissors", computerSelection);
}
// End of functions

function playGame(playerSelection, computerSelection) {
	computerSelection = computerPlay();
	if (playerSelection === "Rock" && computerSelection === "Scissors") {
		message.textContent = `${playerSelection} beats ${computerSelection}!`;
		playerWins++;
		playerScore.textContent = playerWins;
	} else if (playerSelection === "Rock" && computerSelection === "Paper") {
		message.textContent = `${computerSelection} beats ${playerSelection}!`;
		computerWins++;
		computerScore.textContent = computerWins;
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		message.textContent = `${playerSelection} beats ${computerSelection}!`;
		playerWins++;
		playerScore.textContent = playerWins;
	} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
		message.textContent = `${computerSelection} beats ${playerSelection}!`;
		computerWins++;
		computerScore.textContent = computerWins;
	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
		message.textContent = `${playerSelection} beats ${computerSelection}!`;
		playerWins++;
		playerScore.textContent = playerWins;
	} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
		message.textContent = `${computerSelection} beats ${playerSelection}!`;
		computerWins++;
		computerScore.textContent = computerWins;
	} else if (playerSelection === computerSelection) {
		message.textContent = "Draw";
	} else {
		message.textContent = "Error, please try again";
		return playGame();
	}
}





/*
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
			   } else if (playerSelection === "scissors" && computerSelection === "scissors" ||
			   			  playerSelection === "rock" && computerSelection === "rock" ||
			   			  playerSelection === "paper" && computerSelection === "paper") {
			   			  	return "Draw";
			   			  } else {
			   			  	return "Error";
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
}*/
	
	