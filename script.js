// 1rock, 2paper, 3scissors
// 1rock > 3scissors
// 2paper > 3scissors
// 3scissors > 1rock

var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";

var userInput;

//steps
// comparison user input function: determine which thing they chose
// compare users input to opponents random input;

function getInput(input) {
    //get user input, and assign it to rock paper or scissors
    if (input === "R" || input === "r") {
        userInput = input;
        alert("You've chosen Rock");
        return;
    }
    if (input === "P" || input === "p") {
        userInput = input;
        alert("You've chosen Paper");
        return;
    }
    if (input === "S" || input === "s") {
        userInput = input;
        alert("You've chosen Scissors");
        return;
    }
    // Invalid user input will result here
    // Prompt user to try again
    alert("Invalid Input, Try again");
    getInput(prompt());
}

getInput(prompt());