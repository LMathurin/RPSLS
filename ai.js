module.exports = class Ai{
    constructor(){
        let Ai = playerTwo
        if (gameOption === "player_vs_computer");

    }
    
}

playerTwo.ChoseGesture();

let rspGame = 0;
let botSelection = 0;
let botSelection = playerTwo;
function selectMove () {
    let botSelection = Math.floor(Math.random() * Math.floor(4));
    gameState = 1;
    for(var i in players){
        let playerWin = playerWinCheck(players[i].move);
        if(playerWin){
            players[i].score += 1;
        }
        players[i].displayInformation('gameResultState', botSelection, playerWin, players);
    }
}

function playerWinCheck(move){
    var playerWins = false;
    if(move == 0){
        if(botSelection == 2){
        playerWins = true;
        }
    }
    if(move == 1){
      if(botSelection == 0){
        playerWins = true;
        }
    }  
    if(move == 2){
      if(botSelection == 1){
        playerWins = true;
        }
    }
    if(move == 3){
        if(botSelection == 1){
          playerWins = true;
          }
      }
    if(move == 4){
        if(botSelection == 1){
          playerWins = true;
          }
      }
    return playerWins;
}
setInterval(function(){
            selectMove();
            }, 3000);
console.log('playerWinCheck');
    

import.module = class playerOne{}
import.module = class Grestures{}
import.module = class RspGame{}

  