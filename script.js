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

let playerScore  = 0;
let computerScore  = 0;

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

function game(){
    // playRound()
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = yourTurn();
        const computerSelection = counterPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        console.log("you choose: ", playerSelection, "computer chose: " ,computerSelection);
        //incrementing the score:
        if(roundResult.search('You win') > -1){
            playerScore++;
        } else if (roundResult.search('You loose') > -1){
            computerScore++;
        }

        console.log("you : ",playerScore , "computer : " , computerScore);
        
        
        
    }
}

console.log(game())

