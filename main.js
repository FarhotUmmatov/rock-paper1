//a new function to generate a random choice 
//for the computer player in a Rock, Paper, Scissors game.

function getComputerChoice() {
    const randomValue = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * randomValue.length);
    const choice = randomValue[randomIndex];
    return choice;

}


// a another new function to play for single round

function playRound(playerChoice, computerChoice) {
    const playerSelection = playerChoice.toLowerCase(); 
    const computerSelection = computerChoice.toLowerCase();

    const validInput = ["rock", "paper", "scissors"];
    if (!validInput.includes(playerSelection)) {
        return "Invalid Input. Please enter rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection){
        return "It's tie! Try again!";
    } // if Computer wins
    else if ((playerSelection === "rock" && computerSelection === "paper")||
             (playerSelection === "paper" && computerSelection === "scissors")||
             (playerSelection === "scissors" && computerSelection === "rock")) 
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You win!!! ${playerSelection} beats ${computerSelection}!`;
    }
  }

/* function game() {
    for (let i = 0; i < 5; i++) {
    //
        playRound();
      }
} */

function game() {
    const playerScore = 0;
    const computerScore = 0;


}
   
  const playerChoice = prompt("Enter your choice: rock, paper or scissors", "Paper");
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
  