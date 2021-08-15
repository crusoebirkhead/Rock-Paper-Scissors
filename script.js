document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;
let player = document.getElementById('player-result');
let computer = document.getElementById('computer-result');
let tie = document.getElementById('tie')
let playerScore = 0;
let computerScore = 0;

function user(){
    var userChoice = this.id;
    console.log("User: " + userChoice)

    var computerChoice = Math.random();
         if (computerChoice < 0.34) {
             computerChoice = "rock";
          }else if(computerChoice <= 0.67) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          }; 

    console.log("Computer: " + computerChoice);

    console.log(compare(userChoice, computerChoice)); 

    function compare(choice1, choice2) {
      document.getElementById('player-score').innerHTML = playerScore
		    if (choice1 === choice2) {
             tie.textContent += "   The result is a tie!";
             document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
             document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
        }
 
        if (choice1 === "rock" && choice2 === "scissors") {
              playerScore++;
              document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
              document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
              player.textContent += "    Player wins";
            }
        if (choice1 === "rock" && choice2 === "paper") {
              computerScore++;
              document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
              document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
              computer.textContent += "   Computer wins";
            }
				
 
         if (choice1 === "paper" && choice2 === "rock") {
              playerScore++;
              document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
              document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
              player.textContent += "    Player wins";
              } 
              if (choice1 === "paper" && choice2 === "scissors") {
                computerScore++;
                document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
                document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
                computer.textContent += "   Computer wins";
              }
		     
		
		     if (choice1 === "scissors" && choice2 === "paper") {
              playerScore++;
              document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
              document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
              player.textContent += "    Player wins";
             } 
             if (choice1 === "scissors" && choice2 === "rock") {
              computerScore++;
              document.getElementById('computer-score').innerHTML = "Computer score:" + computerScore;
              document.getElementById('player-score').innerHTML = "Player score:" + playerScore;
              computer.textContent += "   Computer wins";
            }
        }
    }


  
