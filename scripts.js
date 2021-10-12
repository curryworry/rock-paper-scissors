function computerPlay(){
    // Computer makes a choice 
    let allowedChoices = ["rock","paper","scissors"];
    let computerSelection = allowedChoices[Math.floor(Math.random()*allowedChoices.length)];
    console.log(`Computer's selection is ${computerSelection.toUpperCase()}`);
}

function playerPlay(){
    // Player Enters a choice
    let playerSelection = prompt();
}

function playRound(){
    //One round of RPS is played and winner of the round is decided
}

function game(){
    //five rounds are played and winner of the game is decided
}

function scoreUpdate(){
    //give player an update of score so far
}

computerPlay();