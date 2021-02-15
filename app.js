const startGameBtn = document.getElementById('start-game-btn');

const ROCK= "ROCK";
const PAPER= "PAPER";
const SCISSORS= "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const RESULT_PLAYER_WINS = "PLAYER_WINS";

let gameIsRunning = false;

function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}`, '').toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return;
  }
  return selection;
}

// const getWinner = (cChoice, pChoice) => {//alternate way to define function
//   cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;
// }

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const getWinner = function(cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (cChoice === pChoice){
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK){
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
}

startGameBtn.addEventListener('click', () => {//anonymous function
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, playerSelection);
  }
  let message = `You picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS){
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const combine = (resultHandler, operation, ...numbers) => {//rest operator always has to be the last argument
  function validateNumber(number) {
    return isNaN(number) ? 0: number;
  }
  let sum = 0;
  for (const num of numbers){
    if (operation === "ADD"){
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// function subtractUp(resultHandler, ...numbers) {//alternate method used in functions
//   let difference = 0;
//   for (const num of numbers) {
//     difference -= num;
//   }
//   resultHandler(difference);
// }
 
function showResult(messageText, result){
  alert(messageText + " " +result );
}

combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 5, 10, 5);
combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 2, 3, 5, 6, 7, 8, 90);
combine(showResult.bind(this, "The result after subtracting all numbers is: "), "SUBTRACT", 2, 5, 66, 32);
