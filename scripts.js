let playerScore = 0;
let computerScore = 0;
const gameController = document.querySelector('#game-controller');
const choiceOptions = document.querySelectorAll('img');
const resultsDiv = document.querySelector('#history');
const containerDiv = document.querySelector('#container');
app();

function app(){
    const playBtn=document.querySelector('#play-btn');
    playBtn.addEventListener('click',gameIntro);
}

function gameIntro(e){
    e.target.remove();
    gameController.textContent = "Choose Rock, Paper, or Scissors! First to 5 wins!";
    choiceOptions.forEach((choice)=>{choice.addEventListener('click',game)});
}

function computerPlay(){
    // Computer makes a choice 
    let allowedChoices = ["rock","paper","scissors"];
    let computerSelection = allowedChoices[Math.floor(Math.random()*allowedChoices.length)];
    return computerSelection.toUpperCase();
}

function playerPlay(e){
    // Player Enters a choice
    let playerSelection;
    if(e.target.id=="rock"){
     playerSelection = "ROCK";
    }
    else if(e.target.id=="paper"){
     playerSelection = "PAPER";
    }
    else if(e.target.id =="scissors"){
     playerSelection = "SCISSORS";
    }
    else{
        console.log("Issue with player choice");  
    }
    return playerSelection;
}


function playRound(computerSelection,playerSelection){
    //One round of RPS is played and winner of the round is decided
    if(computerSelection=="ROCK"&&playerSelection=="PAPER"){
        updateHistory(computerSelection,playerSelection,"Player");
        playerScore++;
    }
    else if(computerSelection=="PAPER"&&playerSelection=="SCISSORS"){
        updateHistory(computerSelection,playerSelection,"Player");
        playerScore++;
    }
    else if(computerSelection=="SCISSORS"&&playerSelection=="ROCK"){
        updateHistory(computerSelection,playerSelection,"Player");
        playerScore++;        
    }
    else if(computerSelection==playerSelection){
        updateHistory(computerSelection,playerSelection,"Neither");
    }
    else{
        updateHistory(computerSelection,playerSelection,"Computer");
        computerScore++;
    }
    scoreUpdate(computerSelection,playerSelection);
}

function game(e){
    //rounds are played until player/computer reaches 5
    if(playerScore<5&&computerScore<5){
        let playerSelection = playerPlay(e);
        let computerSelection = computerPlay();
        playRound(computerSelection,playerSelection);
    }
}

function scoreUpdate(computerSelection,playerSelection){
    //give player an update of score so far
    let leader = computerScore>playerScore?"Computer":playerScore>computerScore?"Player":"Neither";
    gameController.textContent = `Player's score is ${playerScore}. Computer's score is ${computerScore}. ${leader} Leads!`;
    if(playerScore==5){
        gameController.textContent = "PLAYER WINS!";
        const replayButton = document.createElement('button');
        replayButton.classList.add('btn');
        replayButton.setAttribute('id','replay');
        replayButton.textContent = "Click to play again!";
        containerDiv.insertBefore(replayButton,resultsDiv);
        const replay = document.querySelector('#replay');
        replay.addEventListener('click',restartGame);
    }
    else if(computerScore==5){
        gameController.textContent = "COMPUTER WINS!";
        const replayButton = document.createElement('button');
        replayButton.classList.add('btn');
        replayButton.setAttribute('id','replay');
        replayButton.textContent = "Click to play again!";
        containerDiv.insertBefore(replayButton,resultsDiv);
        const replay = document.querySelector('#replay');
        replay.addEventListener('click',restartGame);
    }
    
}

function updateHistory(computerSelection,playerSelection,winner){
    const roundResult = document.createElement('p');
    roundResult.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. ${winner} won round.`;
    roundResult.classList.add('round-results');
    resultsDiv.classList.remove('hidden-item');
    resultsDiv.appendChild(roundResult);
}

function restartGame(e){
    playerScore=0;
    computerScore=0;
    const resultItems = document.querySelectorAll('.round-results');
    resultItems.forEach((resultItem)=>resultItem.remove());
    resultsDiv.classList.add('hidden-item');
    gameIntro(e);
}