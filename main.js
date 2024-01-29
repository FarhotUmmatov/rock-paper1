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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Loop for Best-of-Five
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

        if (result.includes("You win!!!")) {
            playerScore ++;       
        } else if (result.includes("You lose!")){
            computerScore++; //computerScore +=1;
       }
        //Display Score
        console.log(`Score- Player: ${playerScore}, Computer: ${computerScore}.`);
        console.log("-------------------------------------");




       
    }

    //Display Final Winner
    if (playerScore > computerScore) {
        console.log(`You're the overall winner! 
                    Score - You:${playerScore}, Computer: ${computerScore}`)
    } else if (playerScore < computerScore){
        console.log(`Computer is the overall winner! 
                    Score - Computer: ${computerScore}, You:${playerScore} `)
    }


}
   
console.log(game());  
  
  