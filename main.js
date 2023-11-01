console.log('js:loaded')

/*----- constants -----*/
const colors = ["pink", "blue", "red", "green", "yellow"]
const gradeColors = ["black", "white",] // TO DO PUT WHITE IN CSS
const secretCode = generateSecretCode();




  /*----- state variables -----*/
let playerGuess = [];

let guessContainer = [];
let gradeContainer =[];
let attempts = 5; 

  /*----- cached elements  -----*/

  /*----- buttons -----*/ //const titleEl = document.querySelector('title');
//color
const pinkButtonEl = document.querySelector("pink");
const blueButtonEl = document.querySelector("blue");
const redButtonEl = document.querySelector("red");
const greenButtonEl = document.querySelector("green");
const yellowButtonEl = document.querySelector("yellow");

    //extra buttons 
    const submitButtonEl = document.querySelector("submit");

  /*----- event listeners -----*/ //An event listener is a function - more specifically it's a callback function - that is called when an event fires.
  //element.addEventListener('event-name', handleClick);- notes handleXXXX is best practice
    
    // colors

    pinkButtonEl.addEventListener('click', handleClick);
    blueButtonEl.addEventListener('click', handleClick);
    redButtonEl.addEventListener('click', handleClick);
    greenButtonEl.addEventListener('click', handleClick);
    yellowButtonEl.addEventListener('click', handleClick);
    
    // extra listeners

    submitButtonEl.addEventListener('click', handleClick);

  /*----- functions -----*/
  function init(){
    secretCode = [];
  }

  //function handleClick(color){
    //console.log(`Button ${color} was clicked.`); 
    //if (color === 'pink') {
       // } else (color === 'blue') {
       // } else (color === 'red'){
       // } else (color === 'green'){
       // } else (color === 'yellow'){

      //  }
    //} 

    //generate code 
    function generateSecretCode() {
        const secretCode = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            secretCode.push(colors[randomIndex]);
        }
        return secretCode;
    }
    
    
    console.log(generateSecretCode);

    // function for when you select color options and put them in the guess container row 

 
   
  