const results = document.querySelector('#results');

const round = document.createElement('div');
results.classList.add('round'); 
round.textContent = game();





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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    let playerScore  = 0;
    let computerScore  = 0;
    
    playerSelection = button.id;
    computerSelection = counterPlay();
    
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`you selected : ${playerSelection} and computer selected : ${computerSelection}`);
    //incrementing and keeping track of the scores

    if(roundResult.search('You win') > -1){
        playerScore++;
    } else if (roundResult.search('You loose') > -1){
        computerScore++;
    }

    if(computerScore == 5){
        console.log("You lost :( I won");
    }
    else if(playerScore == 5){
        console.log("I lost, you're too good. Congrats on the win!")
    }

    console.log("you : ",playerScore , "computer : " , computerScore);
    
    
}));




function yourTurn(){
    let turn = prompt("Choose among rock paper or scissors: ");
    return turn.toLowerCase(); 
}

function game(){

let playerScore  = 0;
let computerScore  = 0;
    // playRound()
    while (playerScore < 0 && computerScore < 0) {
        
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
        
        if(computerScore == 5){
            console.log("You lost :( I won");
        }
        else if(playerScore == 5){
            console.log("I lost, you're too good. Congrats on the win!")
        }
        
        
    }
}

console.log(game())

