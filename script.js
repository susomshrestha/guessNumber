const score = document.querySelector('.score-value');
const highscore = document.querySelector('.highscore-value');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.reset');
const guessNumber = document.querySelector('.number-block');
const wrapper = document.querySelector('.wrapper');
const guess = document.querySelector('.number');
const result = document.querySelector('.result');
const againButton = document.querySelector('.again');

let randomNumber;
let scoreValue = 20;
let highScoreValue = 0;

function initialize() {
	scoreValue = 20;
	score.textContent = scoreValue;
	guessNumber.textContent = '?';
	wrapper.style.backgroundColor = '#444545';
	guess.value = null;
	result.textContent = 'Enter number';
	setRandomNumber();
}

function reset() {
	initialize();
	highscore.textContent = 0;
	highScoreValue = 0;
}

function setRandomNumber() {
	randomNumber = Math.floor(Math.random() * 21);
}

function checkInput() {
	const value = Number(guess.value);
	if (!value) {
		result.textContent = 'Enter a valid number.';
	} else {
		if (value < randomNumber) {
			displayResult('Guess a higher number.');
			scoreValue--;
		} else if (value > randomNumber) {
			displayResult('Guess a lower number.');
			scoreValue--;
		} else {
			displayResult('Congratulations! You won.');
			wrapper.style.backgroundColor = 'green';
			guessNumber.textContent = randomNumber;
			checkHighScore();
		}
		score.textContent = scoreValue;
	}

	if (scoreValue === 0) {
		displayResult('You Lost!');
    wrapper.style.backgroundColor = 'red';
		pauseGame();
		return;
	}
}

function pauseGame() {
	checkButton.disabled = true;
}

function displayResult(message) {
	result.textContent = message;
}

function checkHighScore() {
	if (scoreValue > highScoreValue) {
		highScoreValue = scoreValue;
		highscore.textContent = highScoreValue;
	}
}

checkButton.addEventListener('click', checkInput);

resetButton.addEventListener('click', reset);

againButton.addEventListener('click', initialize);

initialize();
