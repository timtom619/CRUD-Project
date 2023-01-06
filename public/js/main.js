// grabs the <p> element where result of each hand will be displayed
const handResultElement = document.querySelector(".hand-result");

// "Click to start prompt - Asking User to make a selection"
const start = document
  .getElementById("startBtn")
  .addEventListener("click", startGame);

function startGame() {
  const prompt = document.getElementById("selection-prompt");
  prompt.innerText = "Make your selection";
}

// this determines who wins the current hand
function determineWinner(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    handResult.innerText = "You win!";
  } else if (humanChoice === computerChoice) {
    handResult.innerText = "Draw!";
  } else {
    handResult.innerText = "Computer wins!";
  }
}

// compareChoices function will compare the human and computer choices;
// it does so by passing the arguments humanChoice and computerChoice into the rockPaperScissors function.
// then, the result from rockPaperScissors is stored in a variable labeled result.
// result is then displayed in the appropriate element
const compareChoices = async () => {
  // computerChoice is handled by the server which returns 'rock', 'paper', or 'scissors'
  let computerChoice = await fetch("/computerChoice").then((res) => res.json());
  let handResult = rockPaperScissors(humanChoice, computerChoice);
  handResultElement.innerText = handResult;
};

// we need a way to get the user selection
let humanChoice = "scissors";

// we would want to run this compareChoices when a user clicks on the rock, paper, or scissors button
// for now, we are calling it directly (i.e., everytime the page refreshes) to show functionality and where the results will be displayed
compareChoices();

// console.log(randomRpsGenerator());
// console.log(rockPaperScissors("scissors"));
