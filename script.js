const scores = document.querySelector('#scores');
const selection = document.querySelector('#selection');

const final = document.querySelector('#final');


let playerWins = 0;
let computerWins = 0;
const choices = ['Rock', 'Paper', 'Scissors']
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
  const {
    id
  } = button
  console.log(id);
  playMatch(id, (Math.floor(Math.random() * choices.length)))
}));


const playMatch = (playerChoice, computerChoice) => {

  final.textContent ="";

  let message
    if (playerChoice === 'Scissors'){
        if (choices[computerChoice] === 'Scissors'){
            message =  'It is a tie';
        }
        else if (choices[computerChoice] === 'Rock'){
            message = 'You loose. Rock beat scissors';
        }
        else if (choices[computerChoice] === 'Paper'){
            message = 'You win! scissors beat paper';
        }
    }

    else if (playerChoice === 'Rock'){
        if (choices[computerChoice] === 'Rock'){
            message = 'It is a tie';
        }
        else if (choices[computerChoice] === 'Paper'){
            message = 'You loose. Paper beat Rock.';
        }
        else if (choices[computerChoice] === 'Scissors'){
            message = 'You win! Rock beat Scissors';
        }
    }

    else if (playerChoice === 'Paper'){
        if (choices[computerChoice] === 'Paper'){
            message  =  'It is a tie.';
        }
        if (choices[computerChoice] === 'Scissors'){
            message  =  'You loose. Scissors beat Paper.';
        }
        if (choices[computerChoice] === 'Rock'){
            message  =  'You win! Paper beat Rock.';
        }
    }
    selection.textContent = `You choose : ${playerChoice} & Computer choose : ${choices[computerChoice]}`;

    increment(message); //increment player or computer wins

    console.log(`Your score : ${playerWins}, Computer score : ${computerWins}`)


    scores.textContent = `${message}
    \nYour score : ${playerWins}, Computer score : ${computerWins}`;

    console.log(message)

     
    if(computerWins == 5){
        final.textContent= "You lost :( I won";
        playerWins = 0;
        computerWins = 0;
        selection.textContent = "";
    }
    else if(playerWins == 5){
        final.textContent = "I lost, you're too good. Congrats on the win!";
        playerWins = 0;
        computerWins = 0;
        selection.textContent = "";
    }    

}



  
function increment(message){
    if(message.search('You win') > -1){
                playerWins++;
            } else if (message.search('You loose') > -1){
                computerWins++;
            }      
}



/** Old code :
 * =========================================================================
 * This contains my initial attempt: which was not the proper approach.
 * =========================================================================
 * 
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
// check
// const playerSelection = yourTurn();
// const computerSelection = counterPlay();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection , computerSelection)); 

let playerChoices = [];
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
      const {id} = button
      playerChoices.push(id)
      handleChoice(id)
    })
);

const handleChoice = id => {
    console.log(id)
    console.log(playerChoices)
  }



// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => button.addEventListener('click', () => {
//     let playerScore  = 0;
//     let computerScore  = 0;
    
//     playerSelection = button.id;
//     computerSelection = counterPlay();
    
//     let roundResult = playRound(playerSelection, computerSelection);
//     console.log(`you selected : ${playerSelection} and computer selected : ${computerSelection}`);
//     //incrementing and keeping track of the scores

//     if(roundResult.search('You win') > -1){
//         playerScore++;
//     } else if (roundResult.search('You loose') > -1){
//         computerScore++;
//     }

//     if(computerScore == 5){
//         console.log("You lost :( I won");
//     }
//     else if(playerScore == 5){
//         console.log("I lost, you're too good. Congrats on the win!")
//     }

//     console.log("you : ",playerScore , "computer : " , computerScore);
    
    
// }));




function yourTurn(){
    let turn = prompt("Choose among rock paper or scissors: ");
    return turn.toLowerCase(); 
}

function game(){

let playerScore  = 0;
let computerScore  = 0;
    // playRound()
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = playerChoices[playerChoices.length - 1];
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
        
        if(computerScore == 5){
            console.log("You lost :( I won");
        }
        else if(playerScore == 5){
            console.log("I lost, you're too good. Congrats on the win!")
        }
        
        
    }
}

console.log(game())
 */