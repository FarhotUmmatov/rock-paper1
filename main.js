// Initialize variables for player and computer scores
let playerScore = 0;
let computerScore = 0;

// Select all buttons
const buttons = document.querySelectorAll('button');

// Function to get the computer's choice
function getComputerChoice() {
    // Possible options for the computer
    const randomValue = ["rock", "paper", "scissors"];
    // Randomly select an element from the list
    const randomIndex = Math.floor(Math.random() * randomValue.length);
    // Return the selected option
    const choice = randomValue[randomIndex];
    return choice;
}

// Function to disable all buttons
function disableButtons() {
    // Iterate through all buttons and disable them
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}

// Function for a single round of the game
function playRound(playerSelection) {
    // Computer selects an option
    let computerSelection = getComputerChoice();
    // Initialize variable to store the result
    let result = "";

    // If player and computer choose the same, it's a tie
    if (playerSelection === computerSelection){
        result = `It's tie! Try again! <br><br>
        Computer Score: ${computerScore} <br>
        Player Score: ${playerScore}`;
    } // If computer wins
    else if ((playerSelection === "rock" && computerSelection === "paper")||
             (playerSelection === "paper" && computerSelection === "scissors")||
             (playerSelection === "scissors" && computerSelection === "rock")) 
    {
        // Increase computer score
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}! <br><br>
        Computer Score: ${computerScore} <br>
        Player Score: ${playerScore}
        `;
        // Check if computer has already reached 5 points
        if (computerScore == 5) {
            result += `<br><br>I won the game! <br> Reload the page to play again`;
            // Disable all buttons as the game is over
            disableButtons();
        }
    } else {
        // Increase player score
        playerScore++;
        result = `You win!!! ${playerSelection} beats ${computerSelection}! <br><br>
        Computer Score: ${computerScore} <br>
        Player Score: ${playerScore}
        `;
        // Check if player has already reached 5 points
        if (playerScore == 5) {
            result += '<br><br>You won the game! <br> Reload the page to play again'
            // Disable all buttons as the game is over
            disableButtons();
        }
    }
    // Display the result on the page
    document.getElementById('result').innerHTML = result;
    return;
}

// Each button gets an event listener that starts the game when clicked
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id);
    });
});
  
  