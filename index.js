export default class startGame{}
class startGame {
    constructor(){
        
    }
    
    displayRules() {
        console.log("Welcome to Rock Paper Scisscor Lizard Spock!!");
        console.log("Two player game with 3 rounds in each game");
        console.log("The rules of the gestures are as follows:");
        console.log("* Scissors cut Paper");    
        console.log("* Paper covers Rock");
        console.log("* Rock crushes Lizard");   
        console.log("* Lizard poisons Spock");
        console.log("* Spock smashes Scissors");  
        console.log("* Scissors decapitate Lizard");
        console.log("* Lizard eats Paper");
        console.log("* Paper disproves Spock");
        console.log("* Spock vaporizes Rock");  
        console.log("* Rock crushes Scissors");
        console.log("The winner will be the best out of three hands. GOOD LUCK!");

    }

        runGame(); 
}