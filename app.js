const startGameBtn = document.getElementById('start-game-btn');

const ROCK= "ROCK";
const PAPER= "PAPER";
const SCISSORS= "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

let gameIsRunning = false;

function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}`, '').toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

startGameBtn.addEventListener('click', function(){//anonymous function
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});