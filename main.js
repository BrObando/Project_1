console.log('js:loaded')

/*----- constants -----*/
const colors = ["pink", "blue", "red", "green", "yellow"]
const gradeColors = ["black", "white"] 
//const secretCode = generateSecretCode();




  /*----- state variables -----*/
let playerGuess = [];
let gradeAnswer = [];
let selectContainer = [];
let gradeContainer =[];
let attempts = 5; 
let secretCode =[];
let rowNumber = 1;
let circleNumber = 0; 
  /*----- cached elements  -----*/

  /*----- buttons -----*/ //const titleEl = document.querySelector('title');

const winner = document.querySelector('.winner-message');
console.log(winner);


const selectionInput = document.querySelectorAll('.selection-input');
const solution = document.querySelectorAll('#guessrowanswer');
console.log(solution);
//console.log(guessContainer[0].children[0].children[0]);
//console.log(selectionInput);

generateSecretCode();
    console.log(secretCode);




selectionInput.forEach(function(colorOption){
    colorOption.addEventListener('click', handleClick);
    //console.log(colorOption);
});


const guessContainer = document.querySelectorAll('.guess-container');
//console.log(guessContainer[0].children[0].children[0]);
console.log(guessContainer[0].children[1].children[0]);
//extra buttons 
    const submitButton = document.querySelectorAll("#submit");

  /*----- event listeners -----*/ 
    
    //submitButton.addEventListener('click' , nextRow);

  /*----- functions -----*/
  

  function handleClick(e) {
    //playerGuess.push(e.target.getAttribute("id"));
   // console.log(playerGuess);
   if ( rowNumber <6){


   guessContainer[0].children[rowNumber].children[circleNumber].style.backgroundColor=e.target.id

    if (playerGuess.length<4) {
        
        
        playerGuess.push(e.target.getAttribute("id"));
        circleNumber++
    }
       if (playerGuess.length === 4){
        //guessContainer[0].children[rowNumber].children[circleNumber].style.backgroundColor=e.target.id
        checkMatch()
        playerGuess = [];
        circleNumber = 0;
    
    } 
} else {
    showSolution();
    displaySolutionRow();
   }
  }
  


//edge case - make sure it doesn't come to next row 
//f the player has filled all 6 rows and does not have a match, display the solution row and show a lose message
//If the player guesses the correct secret code, display the solution row and show a win message

function showSolution(){
    if (rowNumber-1 === attempts) {
        displaySolutionRow(); 
        winner.innerHTML = "TRY AGAIN!";
        //setTimeout(("Try Again"), 1000);
        //resetGame();
    } else if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ) {
        displaySolutionRow();
        winner.innerHTML = "YOU WON!";
        //setTimeout(alert("You Won!"), 1000);
        //resetGame();
    } 
}





function displaySolutionRow() {
for (let i= 0; i < 4; i++) {
    solution[0].children[i].style.backgroundColor = secretCode[i];
}
   
}



function checkMatch(){
    if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ){
        //console.log("match");
        displaySolutionRow();
        showSolution();
    } else if (JSON.stringify(playerGuess) !== JSON.stringify(secretCode)) {
       // console.log("false");
       rowNumber++
       winner.innerHTML = `wrong! You have ${(attempts - (rowNumber-1))} guesses left`;
    }
}

    //generate code function
    function generateSecretCode() {
        //const secretCode = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            secretCode.push(colors[randomIndex]);
        }
        return secretCode;
    }
    
    //function resetGame() {
      