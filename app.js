const startGameBtn = document.getElementById('start-game-btn');

const start = function() {//anonymous function
  console.log("Game is Starting");
}

// const person = {
//   name: "Max",
//   greet: function greet() {
//     console.log("Hello There");
//   }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);