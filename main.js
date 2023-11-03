console.log('js:loaded')

 /**Constants*/

const colors = ["pink", "blue", "red", "green", "yellow"] // Colors that will generate in the secret code
const gradeColors = ["black", "white"] 

/**Variables **/

let colorsInSecretCode = new Array(4).fill(null); 
let playerGuess = [];
let gradeAnswer = [];
let selectContainer = [];
let gradeContainer =[];
let attempts = 5; 
let secretCode =[];
let rowNumber = 1;
let circleNumber = 0; 



const winner = document.querySelector('.winner-message');
console.log(winner);


const selectionInput = document.querySelectorAll('.selection-input');
const solution = document.querySelectorAll('#guessrowanswer');
//console.log(solution);

//console.log(guessContainer[0].children[0].children[0]);
//console.log(selectionInput);

generateSecretCode();
//console.log(secretCode);




selectionInput.forEach(function(colorOption){
    colorOption.addEventListener('click', handleClick);
    //console.log(colorOption);
});


const guessContainer = document.querySelectorAll('.guess-container');
//console.log(guessContainer[0].children[0].children[0]);
//console.log(guessContainer[0].children[1].children[0]);

const gradedAnswer = document.querySelectorAll('.grade-container');  
//console.log(gradedAnswer[0].children[1].children[0]);


//const gradedPegs = gradedAnswer[0].children[rowNumber].children[circleNumber] 



function handleClick(e) { //
    
   if ( rowNumber <6){


   guessContainer[0].children[rowNumber].children[circleNumber].style.backgroundColor=e.target.id

    if (playerGuess.length<4) {
        playerGuess.push(e.target.getAttribute("id"));
        circleNumber++
    }
       if (playerGuess.length === 4){
        checkMatch()
        playerGuess = [];
        circleNumber = 0;
    
    } 
} else {
    showSolution();
    displaySolutionRow();
   }
}
  


function showSolution(){ // The solution will populate once the player wins or the number of maximum attempts allowed is reached
    if (rowNumber-1 === attempts) {
        displaySolutionRow(); 
        winner.innerHTML = "TRY AGAIN!";
      
    } else if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ) {
        displaySolutionRow();
        winner.innerHTML = "YOU WON!";
        
    } 
}



function displaySolutionRow() { // The solution will display at the top row
    for (let i= 0; i < 4; i++) {
        solution[0].children[i].style.backgroundColor = secretCode[i];
    }
}


function checkMatch(){ // Checks if the player guess is a match to the secret code 
    if (JSON.stringify(playerGuess) === JSON.stringify(secretCode) ){
        displaySolutionRow();
        showSolution();
    } else if (JSON.stringify(playerGuess) !== JSON.stringify(secretCode)) {
        checkGuessRow();
        rowNumber++
       winner.innerHTML = `wrong! You have ${(attempts - (rowNumber-1))} guesses left`;
    }
}

   
function generateSecretCode() { // Generates the secret code the player has to guess correctly
    for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            secretCode.push(colors[randomIndex]);
        }
        return secretCode;
     }
    
function checkGuessRow() {
    let secretCodeDC = JSON.parse(JSON.stringify(secretCode));
    console.log(secretCodeDC);
    for (let i =0;  i <4; i ++) {
        if (playerGuess[i] === secretCode[i]) {
        
    secretCodeDC.slice(i,1);
        colorsInSecretCode[i] = true;
    } else if 
        (secretCode.includes(playerGuess[i]) && !colorsInSecretCode[i] && secretCodeDC.includes(playerGuess[i])) {
    
            colorsInSecretCode[i] = false;
        }
    }
    console.log(colorsInSecretCode);
    colorsInSecretCode.forEach((color, idx) => {

        if (color === true){
            gradedAnswer[0].children[rowNumber].children[idx].style.backgroundColor = "purple";
        } else if (color === false) {
            gradedAnswer[0].children[rowNumber].children[idx].style.backgroundColor = "orange";
        }
    })
    colorsInSecretCode = [null,null,null,null];
}







        
            
      