// Example fetch using pokemonapi.co
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


// grabs the <p> element where result of each hand will be displayed
const handResultElement = document.querySelector('.hand-result')

// "Click to start prompt - Asking User to make a selection"
const start = document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
  const prompt = document.getElementById('selection-prompt');
  prompt.innerText = 'Make your selection';
}

// this determines who wins the current hand
function rockPaperScissors(human, computer) {
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

// compareChoices function will compare the human and computer choices;
// it does so by passing the arguments humanChoice and computerChoice into the rockPaperScissors function.
// then, the result from rockPaperScissors is stored in a variable labeled result.
// result is then displayed in the appropriate element
const compareChoices = async () => {
  // computerChoice is handled by the server which returns 'rock', 'paper', or 'scissors'
  let computerChoice = await fetch('/computerChoice').then(res => res.json())
  let handResult = rockPaperScissors(humanChoice, computerChoice)
  handResultElement.innerText = handResult
}

// we need a way to get the user selection
let humanChoice = 'scissors'

// we would want to run this compareChoices when a user clicks on the rock, paper, or scissors button
// for now, we are calling it directly (i.e., everytime the page refreshes) to show functionality and where the results will be displayed
compareChoices()

// console.log(randomRpsGenerator());
// console.log(rockPaperScissors("scissors"));
