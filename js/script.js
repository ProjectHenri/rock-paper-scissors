const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#roundResult');
const playerPoints = document.querySelector('#player');
const computerPoints = document.querySelector ('#computer') 
buttons.forEach(button => button.addEventListener('click', playRound));
buttons.forEach(button => button.addEventListener('click', toggleState));
let playerScore = 0;
let computerScore = 0;

function toggleState(e){
    buttons.forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');
}

function updateGame(player, computer){
    
    playerPoints.textContent = `${playerScore}`;
    computerPoints.textContent = `${computerScore}`;

    if(player === 5 || computer === 5){ 
        if(player > computer){
            roundResult.textContent = 'The player wins! Pick an option to start a new game.';
        }else{
            roundResult.textContent = 'The computer wins! Pick an option to start a new game.';
        }
        playerScore = 0;
        computerScore = 0;
    }
}
function modifySelection(text){
    switch(text){
        case 'R':
            text = 'Rock'
        break;
        case 'P':
            text = 'Paper'
        break;
        case 'S':
            text = 'Scissors'
        break;

        default: text = '';
    }
    return text;
}
function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(random){ // Determine what the computer plays
        case 0: 
            computerChoice = 'Rock';
        break;
        case 1:
            computerChoice = 'Paper';
        break;
        case 2:
            computerChoice = 'Scissors';
        break;
    }
    return computerChoice;
}

function playRound(event){
    let playerSelection = modifySelection(event.target.textContent);
    let computerSelection = computerPlay();

    if(
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ){
        playerScore++; // Keep track how many times player has won in a match
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
     }
     else if(playerSelection === computerSelection){
        roundResult.textContent = 'It\'s a tie!';
    }else{
        computerScore++; // Keep track how many times the computer has won in a match
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    updateGame(playerScore, computerScore);
}