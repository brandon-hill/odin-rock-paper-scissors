const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const playerScoreCount = document.querySelector('#player-score');
const computerScoreCount = document.querySelector('#cpu-score');
const choices = document.querySelectorAll('.control-container button');
const choiceContainer = document.querySelector('.control-container');
const instructions = document.querySelector('.instructions');
const roundCount = document.querySelector('#round');
const resetBtn = document.querySelector('#reset-btn');
const header = document.querySelector('h1');
const startBtn = document.querySelector('#start-btn');
const startMessage = document.querySelector('.start-message');
const startContent = document.querySelector('.start-container');
const gameContent = document.querySelector('.game-container');

let round = 1;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(items) {
	let choice = items[Math.floor(Math.random() * items.length)];
	return choice;
}

function compareChoices(playerChoice) {
	let computerChoice = getComputerChoice(['rock', 'paper', 'scissors']);

	if (playerChoice == computerChoice) {
		instructions.textContent = 'Draw!';
		return 'draw';
	} else if (playerChoice == 'rock' && computerChoice == 'paper') {
		instructions.textContent = 'You lose, paper beats rock';
		return 'computer';
	} else if (playerChoice == 'rock' && computerChoice == 'scissors') {
		instructions.textContent = 'You win! Rock beats scissors';
		return 'player';
	} else if (playerChoice == 'paper' && computerChoice == 'rock') {
		instructions.textContent = 'You win! Paper beats rock';
		return 'player';
	} else if (playerChoice == 'paper' && computerChoice == 'scissors') {
		instructions.textContent = 'You lose, scissors beats paper';
		return 'computer';
	} else if (playerChoice == 'scissors' && computerChoice == 'rock') {
		instructions.textContent = 'You lose, rock beats scissors';
		return 'computer';
	} else if (playerChoice == 'scissors' && computerChoice == 'paper') {
		instructions.textContent = 'You win! Scissors beats paper';
		return 'player';
	} else {
		instructions.textContent = 'There was an error, please try again!';
		return false;
	}
}

function playRound(choice) {
	let roundWinner = compareChoices(choice);
	round++;
	roundCount.textContent = round;

	if (roundWinner == 'player') {
		playerScore++;
		playerScoreCount.textContent = playerScore;
		if (playerScore == 5) {
			instructions.classList.add('hidden');
			choiceContainer.classList.add('hidden');
			resetBtn.classList.add('hidden');
			startMessage.classList.add('hidden');
			header.textContent = 'Congrats, you won the game!';
			startBtn.textContent = 'Play again';
			startContent.classList.toggle('hidden');
		}
	} else if (roundWinner == 'computer') {
		computerScore++;
		computerScoreCount.textContent = computerScore;
		if (computerScore == 5) {
			instructions.classList.add('hidden');
			choiceContainer.classList.add('hidden');
			resetBtn.classList.add('hidden');
			startMessage.classList.add('hidden');
			header.textContent = 'The computer wins this game';
			startBtn.textContent = 'Play again';
			startContent.classList.toggle('hidden');
		}
	}
}

startBtn.addEventListener('click', (e) => {
	// Hide start content
	startContent.classList.add('hidden');

	// Initialize score
	round = 1;
	playerScore = 0;
	computerScore = 0;
	roundCount.textContent = round;
	playerScoreCount.textContent = playerScore;
	computerScoreCount.textContent = computerScore;

	// Show game content
	resetBtn.classList.remove('hidden');
	gameContent.classList.remove('hidden');
	choiceContainer.classList.remove('hidden');
	instructions.textContent = 'Choose rock, paper, or scissors to play';
	instructions.classList.remove('hidden');
});

choices.forEach((button) => {
	button.addEventListener('click', (e) => {
		playRound(e.target.textContent.toLowerCase());
	});
});

resetBtn.addEventListener('click', (e) => {
	location.reload();
});
