![](./Assets/Game.png)
![](./Assets/Object.png)
![](./Assets/Rules.png)
![](./Assets/Wireframe.png)
![](./Assets/PopUps.png)

## User Stories
1. As a player I would like to start the game when I am ready. 
2. As a player I would like to have a list of rules to refer back to. 



## Psuedocode For The Overall MasterMind Game Play

1. The player will be given a choice to begin the game with a "Start Game" button. The computer will intialize 4 random colors as the secret code.
2. The player will be able to select each circle and a drop down box will appear with the 9 possible color options. Once all 4 circle/pegs are populated with a color the player can check their guess with the a "TRY It" button on the guess indicator. 
3.The guess indicator box will reside to the right of the gameboard box and indicate which of the player guesses were correct. 
4. For each guess a green score peg indicates that one of your pegs is the right color in the right position. An orange score peg indicates that one of your pegs is the right color in the wrong position. A blank peg will indicate that color is not in the secret code. 
5. If the code is not guessed correctly in the 8 tries provided an autogenerate pop-up box will display with the message 'GAME OVER' and the secret code will be revealed at the bottom of the gameboard. If the code is guessed correctly a 'WINNER' message will populate. Within each box it will provide the player with the option to quit or try again. 
