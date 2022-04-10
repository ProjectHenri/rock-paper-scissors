function computerPlay(){
    let random = Math.floor(Math.random() * 3); // Get a random number between 0-2 that determines what the computer plays
    let computerChoice;
    switch(random){
        case 0:
            computerChoice = 'rock';
        break;
        case 1:
            computerChoice = 'paper';
        break;
        case 2:
            computerChoice = 'paper';
        break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let pSelection = playerSelection.toLowerCase();

    if(
        (pSelection === 'rock' && computerSelection === 'scissors') || 
        (pSelection === 'paper' && computerSelection === 'rock') ||
        (pSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++; // Keep track how many times player has won in a match
        return `You win! ${pSelection} beats ${computerSelection}`;
     }
     else if(pSelection === computerSelection){
        return 'It\'s a tie!';
    }else{
        computerScore++; // Keep track how many times the computer has won in a match
        return `You lose! ${computerSelection} beats ${pSelection}`;
    }
}

function game(){
    for(i = 0; i<5; i++){
        let playerSelection = prompt('Enter your choice', 'rock');
        console.log(playRound(playerSelection, computerPlay()));
    }
    let outcome;
    if(playerScore > computerScore){
        outcome = 'You win the match!';
    }else if(playerScore === computerScore){
        outcome = 'The match is a tie!';
    }else{
        outcome = 'You lose the match!';
    }
    playerScore = 0; // Set player score to 0 after a game  
    computerScore = 0; // Set computer score to 0 after a game
    return outcome;
}

let playerScore = 0;
let computerScore = 0;

console.log(game());
