//a new function to generate a random choice 
//for the computer player in a Rock, Paper, Scissors game.

function getComputerChoice() {
    const randomValue = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * randomValue.length);
    const choice = randomValue[randomIndex];
    return choice;

}


// a another new function

function playRound(playerChoice, computerChoice) {
    const playerSelection = playerChoice.toLowerCase(); 
    const computerSelection = computerChoice.toLowerCase();

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
   
  const playerChoice = prompt("Enter your choice: rock, paper or scissors", "Paper");
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
  