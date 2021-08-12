
let hand = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelector('.players-choice')
// let playerSelection = playerClick()
let playerScore = 0
let computerScore = 0
let score = document.getElementById('score').innerHTML 

//Computer's selection
function computerChoice(){
  let randomIndex = Math.floor(Math.random() * hand.length);
  let unknownHand = hand[randomIndex];

  return (unknownHand);
}

//User's selection
let value = ''
buttons.addEventListener('click', playerClick)
function playerClick(){
  value = buttons.id
  console.log(value)
}

//Decides winner and counts score
function responseReturn(playerSelection, randomHand){

  randomHand = computerChoice()

  if (((playerSelection === "Rock" && randomHand === "Paper") ||
  (playerSelection === "Paper" && randomHand === "Scissors") ||
  (playerSelection === "Scissors" && randomHand === "Rock"))){

    computerScore += 1
    let computerWon = document.createTextNode("Computer won!")
    score.appendChild(computerWon)


    if (playerScore = 5){
      let winner = document.createTextNode("You have won the game!");
      score.appendChild(winner)
    }

  else if (playerSelection === randomHand){
  let tie = document.createTextNode("It's a tie")
  score.appendChild(tie)
  }
    else{
      playerScore += 1
      let userWon = document.createTextNode("User won")
      score.appendChild(userWon)

      if (computerScore = 5){
        score = "You have lost the game!"
      }
    }
}
}

computerChoice();


