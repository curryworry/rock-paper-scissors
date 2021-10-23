let playerScore = 0;
let computerScore = 0;
const gameController = document.querySelector('#game-controller');

app();

function app(){
    const playBtn=document.querySelector('#play-btn');
    playBtn.addEventListener('click',gameIntro);
}

function gameIntro(e){
    console.log(e);
    e.target.remove();
    gameController.textContent = "Choose Rock, Paper, or Scissors! First to 5 wins!";
}

function computerPlay(){
    // Computer makes a choice 
    let allowedChoices = ["rock","paper","scissors"];
    let computerSelection = allowedChoices[Math.floor(Math.random()*allowedChoices.length)];
    console.log(`Computer's selection is ${computerSelection.toUpperCase()}`);
    return computerSelection.toUpperCase();
}

function playerPlay(){
    // Player Enters a choice
    console.log("Enter a choice: ROCK/PAPER/SCISSORS?")
    let playerInput = window.prompt("Enter a choice: ROCK/PAPER/SCISSORS");
    let playerSelection = playerInput.toUpperCase();
    if(validatePlayerChoice(playerSelection)){
        console.log(`Player's selection is ${playerSelection}`);
        return playerSelection;
    }
    else{
        console.log("Invalid Choice: Choose either ROCK/PAPER/SCISSORS");
        playerPlay();
    }
}

function validatePlayerChoice(playerSelection){
    //If player makes invalid selection, make them choose again
    if(playerSelection == "ROCK" || playerSelection =="PAPER" || playerSelection == "SCISSORS"){
        return true;
    }
    else{
        return false;
    }
}

function playRound(computerSelection,playerSelection){
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    //One round of RPS is played and winner of the round is decided
    if(computerSelection=="ROCK"&&playerSelection=="PAPER"){
        console.log("Player wins round!");
        playerScore++;
    }
    else if(computerSelection=="PAPER"&&playerSelection=="SCISSORS"){
        console.log("Player wins round!");
        playerScore++;
    }
    else if(computerSelection=="SCISSORS"&&playerSelection=="ROCK"){
        console.log("Player wins round!");
        playerScore++;        
    }
    else if(computerSelection==playerSelection){
        console.log("Round drawn!");
    }
    else{
        console.log("Computer wins round!");
        computerScore++;
    }
    scoreUpdate();
}

function game(){
    //five rounds are played and winner of the game is decided
    console.log("Welcome to ROCK, PAPER, SCISSORS!"); 
    console.log("You will now play a 'First to 5' game of Rock, Paper, Scissors.");
    console.log("The first player to reach five points wins.");
    while(playerScore<5&&computerScore<5){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(computerSelection,playerSelection);
    }
    if(playerScore==5){
        console.log("PLAYER WINS GAME!");
    }
    else{
    console.log("COMPUTER WINS GAME!");
    }
}

function scoreUpdate(){
    //give player an update of score so far
    console.log(`Computer's current score is ${computerScore}, and Player's current score is ${playerScore}`);
}
