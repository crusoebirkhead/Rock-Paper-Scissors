//Computer's selection
let hand = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('input')
let playerSelection = buttons.id
let playerScore = 0
let computerScore = 0
function computerChoice(){
  let randomIndex = Math.floor(Math.random() * hand.length);
  let randomHand = hand[randomIndex];

  return (randomHand);
}

function responseReturn(playerSelection, randomHand){

  let randomHand = computerChoice()

  let score = ''

  if (((playerSelection === "Rock" && randomHand === "Paper") ||
  (playerSelection === "Paper" && randomHand === "Scissors") ||
  (playerSelection === "Scissors" && randomHand === "Rock"))){

    computerScore += 1
    score = ("You have lost, " + playerSelection + " beats " + randomHand
    "<br></br>Player score is" + playerScore + ' and Computer Score is ' + computerScore)

    if (playerScore = 5){
      score = "You have one the game!"
    }

  else if (playerSelection === randomHand);{
  score = ("It's a tie")
  }
    else{
      playerScore += 1
      score = ("You have won" + playerSelection + ' beats ' + randomHand)

      if (computerScore = 5){
        score = "You have lost the game!"
      }
    }
}

document.getElementById('score').innerHTML = score

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        responseReturn(button.value)
    })
})
