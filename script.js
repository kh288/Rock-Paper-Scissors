// 0rock, 1paper, 2scissors
// 1rock > 3scissors
// 2paper > 3scissors
// 3scissors > 1rock

// get user input, get computer input
// compare both values, then output result, tick a scorekeep
// 

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";

var userWins = 0;
var computerWins = 0;
var ties = 0;

var userInput;
var userInputInt;
var computerChoice;
//steps
// comparison user input function: determine which thing they chose
// compare users input to opponents random input;

function getRandomInt(value) {
    return Math.floor(Math.random() * value);
}

function getInput(input) {
    //get user input, and assign it to rock paper or scissors
    if (input === "R" || input === "r") {
        userInput = "R"; // Store user input into var
        userInputInt = 0; // Rock is assigned 0
        alert("You've chosen Rock");
        return;
    }
    if (input === "P" || input === "p") {
        userInput = "P";
        userInputInt = 1;
        alert("You've chosen Paper");
        return;
    }
    if (input === "S" || input === "s") {
        userInput = "S";
        userInputInt = 2;
        alert("You've chosen Scissors");
        return;
    }
    // Invalid user input will result here
    // Prompt user to try again
    alert("Invalid Input, Try again");
    getInput(prompt("Type 'R' 'P' or 'S'"));
}

function computerInput(input) {
    if (input === 0) {
        // Computer chose rock
        computerChoice = "R";
        return;
    }
    if (input === 1) {
        // Computer chose paper
        computerChoice = "P";
        return;
    }
    if (input === 2) {
        computerChoice = "S";
        return;
    }
    alert("Computer input incorrect!");
}

function compareInputs(input1, input2) {
    if (input1 !== input2) {
        //if statements if User Wins
        if ((input1 === "R" && input2 === "S") || 
            (input1 === "P" && input2 === "R") || 
            (input1 === "S" && input2 === "P")) {
                alert("Player Wins!");
                userWins++;
                return;
        }
        //if statements for when the computer wins
        alert("Computer Wins!");
        computerWins++;
        return;
    }
    alert("Draw Game!");
    ties++;
    return;
}

function gameResults() {
    alert("Wins: " + userWins + ". Computer Wins: " + computerWins + ". Draws: " + ties);
}

// Asks player if they want to play the game again
function playAgain() {
    var play = prompt("Do you want to play again? Type 'Y' to play again! Type 'N' to quit.");
    if (play === "y" || play === "Y") {
        playGame();
        return;
    }
    if (play === "n" || play === "N") {
        alert("Good bye!");
        return;
    }
    alert("Invalid input, try 'Y' or 'N' instead");
    playAgain();
    return;
}

// plays the game, runs every individual function for the game
function playGame() {
    computerInput(getRandomInt(3));
    getInput(prompt("Welcome to Rock Paper Scissors! Type 'R' 'P' or 'S'"));
    compareInputs(userInput, computerChoice);
    gameResults();

    playAgain();
}

// computerInput(getRandomInt(3));
// getInput(prompt());

// compareInputs(userInput, computerChoice);
// gameResults();

playGame();
//compare both outputs