function counterPlay(){
    let computerChoice = Math.random(); //returns an integer 0 to 1
    if(computerChoice <= 0.34){
        return "Rock";
    }
    else if(computerChoice <= 0.67){
        return "Paper";
    }
    else return "Scissors"
}

// console.log(counterPlay());

