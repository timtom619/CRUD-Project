//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// "Click to start prompt - Asking User to make a selection"
const start = document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
  const prompt = document.getElementById('selection-prompt');
  prompt.innerText = 'Make your selection';
}

// Creates a random selection
function randomRpsGenerator() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//
function rockPaperScissors(human) {
  let computer = randomRpsGenerator();
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    return "You Win!";
  } else if (human === computer) {
    return "Draw!";
  } else {
    return "Computer Wins!";
  }
}

console.log(randomRpsGenerator());
console.log(rockPaperScissors("scissors"));
