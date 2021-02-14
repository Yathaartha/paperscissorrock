const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log("Game is Starting");
}

const person = {
  name: "Max",
  greet: function greet() {
    console.log("Hello There");
  }
};

person.greet();

startGameBtn.addEventListener('click', startGame);