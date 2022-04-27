function counterPlay(){
    let computerChoice = Math.random(); //returns an integer 0 to 1
    if(computerChoice <= 0.34){
        return "rock";
    }
    else if(computerChoice <= 0.67){
        return "paper";
    }
    else return "scissors"
}

// console.log(counterPlay());

function yourTurn(){
    let turn = prompt("Choose among rock paper or scissors: ");
    return turn;
}

function playRound(playerSelection, computerSelection){
    computerSelection = counterPlay();
    playerSelection = yourTurn().toLowerCase(); //becomes case insensitive
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'scissors'){
        if (computerSelection === 'scissors'){
            console.log( 'It is a tie');
        }
        else if (computerSelection === 'rock'){
            console.log('You loose. Rock beat scissors');
        }
        else if (computerSelection === 'paper'){
            console.log('You win! scissors beat paper');
        }
    }

    else if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            console.log('It is a tie');
        }
        else if (computerSelection === 'paper'){
            console.log('You loose. Paper beat rock.');
        }
        else if (computerSelection === 'scissors'){
            console.log('You win! Rock beat scissors');
        }
    }

    else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            console.log('It is a tie.');
        }
        if (computerSelection === 'scissors'){
            console.log('You loose. Scissors beat paper.');
        }
        if (computerSelection === 'rock'){
            console.log('You win! Paper beat rock.');
        }
    }

    else console.log('The world is beautiful');
}


counterPlay();
playRound();
