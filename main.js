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
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {        
        
        const playerChoice = prompt("Enter your choice: rock, paper or scissors", "Paper");
        const computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        //Set up a log output before the loop to present the results
        console.log(`Round: ${i}`);
        //Add player and computer choices to the log
        console.log(`Your choice: ${playerChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        //Display Result
        console.log(`Result: ${result}`);
        //Display Score
        console.log(`Score- Player: ${playerScore}, Computer: ${computerScore}.`);
        console.log("-------------------------------------");




        if (result.includes("You win!!!")) {
            playerScore++; //playerScore += 1;       
        } else if (result.includes("You lose!")){
            computerScore++; //computerScore +=1;
       }
    }


}
   
  const playerChoice = prompt("Enter your choice: rock, paper or scissors", "Paper");
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
  