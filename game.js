const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors= document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const current = document.querySelector('.current');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice===0)
        {return 'rock';}
    else if (choice===1)
        {return 'paper';}
    else 
        {return 'scissors';}
}

/*function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
}*/

// Plays the game for a single round.
//After each round, the winner is announced.
function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice){
        console.log("It's a tie!");
        }
    else if ((humanChoice==='rock' && computerChoice==='paper')
            || (humanChoice==='paper' && computerChoice==='scissors')
            || (humanChoice==='scissors' && computerChoice==='rock')){
        //console.log("You lose this round.");
        computerScore++;
    }
    else {
        //console.log("You win this round.");
        humanScore++;
    }
};


// Plays the game for a specified amount of rounds.
// After each round, the current winner and score are announced.
// After the rounds are done, the final winner is announced.
/*function playGame(rounds) {
    for (let round=1; round<rounds+1;round++) {
        console.log('ROOUND '+round);
        const humanChoice = getHumanChoice();
        const computerChoice= getComputerChoice();
        console.log('Your choice: '+humanChoice);
        console.log('Computer choice: '+computerChoice);

        playRound(humanChoice,computerChoice);
        console.log('Current score (You/Computer): '+humanScore+'/'+computerScore);
    }
    console.log('FINAL RESULT:')
    if (humanScore===computerScore){
        console.log("It's a tie!");
    }
    else if (humanScore>computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}*/


buttons.forEach(button =>{
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
        current.textContent = 'Current score (You/Computer): '+humanScore+'/'+computerScore;
        if (humanScore==5 || computerScore==5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
            if (computerScore<5) {
                result.textContent = "FINAL: WIN";
            } else if (humanScore<5 ) {
                result.textContent = "FINAL: LOSE";
            } else {
                result.textContent = "FINAL: TIE";
            }
        }
})});

// Play game for 5 rounds.
//playGame(5);

