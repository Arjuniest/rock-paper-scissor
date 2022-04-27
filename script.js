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
    return turn.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'scissors'){
        if (computerSelection === 'scissors'){
            return  'It is a tie';
        }
        else if (computerSelection === 'rock'){
            return 'You loose. Rock beat scissors';
        }
        else if (computerSelection === 'paper'){
            return 'You win! scissors beat paper';
        }
    }

    else if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return 'It is a tie';
        }
        else if (computerSelection === 'paper'){
            return 'You loose. Paper beat rock.';
        }
        else if (computerSelection === 'scissors'){
            return 'You win! Rock beat scissors';
        }
    }

    else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return 'It is a tie.';
        }
        if (computerSelection === 'scissors'){
            return 'You loose. Scissors beat paper.';
        }
        if (computerSelection === 'rock'){
            return 'You win! Paper beat rock.';
        }
    }

    else return 'The world is beautiful';
}
/* check
// const playerSelection = yourTurn();
// const computerSelection = counterPlay();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection , computerSelection)); */