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
