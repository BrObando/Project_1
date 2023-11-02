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


const selectionInput = document.querySelectorAll('.selection-input');
const solution = document.querySelectorAll('#guessrowanswer');
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

    if (playerGuess.length<4) {
        playerGuess.push(e.target.getAttribute("id"));
        //reset// 
        guessContainer[0].children[rowNumber].children[circleNumber].style.backgroundColor=e.target.id
       
        circleNumber++

       if (playerGuess.length === 4){
        checkMatch()
        playerGuess = [];
        circleNumber = 0;
        

    } 
   
  }

  
}

//edge case - make sure it doesn't come to next row 
//f the player has filled all 6 rows and does not have a match, display the solution row and show a lose message
//If the player guesses the correct secret code, display the solution row and show a win message

function showSolution(){
    if (rowNumber === attempts) {
        displaySolutionRow(); 
        alert("Try Again");
        resetGame();
    } else if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ) {
        displaySolutionRow();
        alert ("You Won!");
        resetGame();
    }
}


function displaySolutionRow() {
    
for (let i= 0; i < 4; i++) {
    solution.children[0].style.backgroundColor = secretCode
}
   
}



function checkMatch(){
    if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ){
        console.log("match");
    } else if (JSON.stringify(playerGuess) !== JSON.stringify(secretCode)) {
       // console.log("false");
       rowNumber++

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
    