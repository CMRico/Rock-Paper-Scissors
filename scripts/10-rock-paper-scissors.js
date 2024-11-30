let score = JSON.parse(localStorage.getItem('score')) ||{//|| this is the shortcut using the default operator&JSON.parse will convert adjacent string to an object
  wins: 0,
  losses: 0,
  ties: 0
  }; 
  
  updateScoreElement();
  
  //need to convert it back
/* this is just the one above ^
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}


//difference between null and undefined
null= intentionally want something to be empty


*/      
//needs to be outside function and scope to redo the code




function playGame(playerMove) {
  const computerMove = pickComputerMove();


let result = '';

if(playerMove === 'scissors') {
  if(computerMove === 'rock') {
  result = 'You lose.';
} else if (computerMove === 'paper' ) {
  result = 'You Win.';
} else if (computerMove === 'scissors') {
  result = 'Tie.';
}

} else if(playerMove === 'paper') {
if(computerMove === 'rock') {
result = 'You Win.';
} else if (computerMove === 'paper' ) {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You lose.';
}

} else if(playerMove === 'rock') {
if(computerMove === 'rock') {
  result = 'Tie.';
} else if (computerMove === 'paper' ) {
  result = 'You lose.';
} else if (computerMove === 'scissors') {
  result = 'You Win.';
}
}

if(result === 'You Win.') { //this is the objects of java
score.wins += 1;
} else if(result === 'You lose.') {
score.losses += 1;
} else if(result === 'Tie.') {
score.ties += 1;
}



localStorage.setItem('score', JSON.stringify(score));//only supports strings had to convert our object to string & .setItem is a method score is the saved item
updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML =     ` You 
<img src="images/${playerMove}-emoji.png" 
class="move-icon">
<img src="images/${computerMove}-emoji.png" 
class="move-icon">
computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



function pickComputerMove() {
const randomNumber = (Math.random()); 

let computerMove = '';// global variables

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock'; 
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 /3 && randomNumber < 1 ) {
    computerMove = 'scissors';
  }

  return computerMove;
}


