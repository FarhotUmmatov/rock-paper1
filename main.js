//a new function to generate a random choice 
//for the computer player in a Rock, Paper, Scissors game.

function getComputerChoice() {
    const randomValue = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * randomValue.length);
    const choice = randomValue[randomIndex];
    return choice;

}


// a another new function

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Try again!";
    } // if Computer wins
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats the rock.";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats the paper.";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats the scissors.";
    } //if Player wins
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats the rock.";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats the scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats the paper.";
    }
  }
   
  const playerSelection = prompt("Enter your choice: rock, paper or scissors");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  