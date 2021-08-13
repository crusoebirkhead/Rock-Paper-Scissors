document.getElementById('Rock').onclick = user;
document.getElementById('Paper').onclick = user;
document.getElementById('Scissors').onclick = user;
 
 
function user(){
   let userChoice = this.id;
   // console.log("User: " + userChoice)
 
   let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
         }else if(computerChoice <= 0.67) {
            computerChoice = "paper";
         }else{
            computerChoice = "scissors";
         };
 
   // console.log("Computer: " + computerChoice);
 
   // console.log(compare(userChoice, computerChoice));
 
   function compare(choice1, choice2) {
  
       if (choice1 === choice2) {
           return "The result is a tie!";
       }
       if (choice1 === "rock") {
           if (choice2 === "scissors") {
               return "rock wins";
           }else{
               return "paper wins";
           }
       }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
             } else {
                 return "scissors wins";
             }
        }
  
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                return "scissors wins";
           }
       }
   }
}
 var paragraph = document.getElementById("score");
var text = document.createTextNode("This just got added");
 
paragraph.appendChild(text);
