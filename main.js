function getComputerChoice() {
    const randomValue = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * randomValue.length);
    const choice = randomValue[randomIndex];
    return choice;

}

let getRandomValue = getComputerChoice();

console.log(getRandomValue);