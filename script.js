document.getElementById('rock').onclick = user;

document.getElementById('paper').onclick = user;

document.getElementById('scissors').onclick = user;

let score = document.getElementById('score')




//User choice
function user(){

    let userChoice = this.id;

    console.log("User: " + userChoice)

//Computer choice
    let computerChoice = Math.random();

         if (computerChoice < 0.34) {

             computerChoice = "rock";

          }else if(computerChoice <= 0.67) {

             computerChoice = "paper";

          }else{

             computerChoice = "scissors";

          }; 

//Decides winner and posts announcement
    function compare(choice1, choice2) {
    
      if (choice1 === choice2) {

          score.textContent += "   The result is a tie!";
      }

      if (choice1 === "rock" && choice2 === "scissors") {
            playerScore++;

            score.textContent += "    User wins";
          }
      
      if (choice1 === "rock" && choice2 === "paper") {
            computerScore++;

            score.textContent += "   Computer wins";

          }
      

      if (choice1 === "paper" && choice2 === "rock") { 
            playerScore++;

            score.textContent += " User wins";

          }

      if (choice1 === "paper" && choice2 === "scissors") { 
            computerScore++;

            score.textContent += " Computer wins";

          }
  
      if (choice1 === "scissors" && choice2 === "rock") { 
            computerScore++;

            score.textContent += " Computer wins";

           } 

      if (choice1 === "scissors" && choice2 === "paper") { 
            playerScore++;

            score.textContent += " User wins";

           } 
    } 
  }

  
  
