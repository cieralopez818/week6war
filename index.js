console.log("Card Game Of War!");

class Card {
    constructor (suit, face, value){
        this.suit= suit;
        this.face= face;
        this.value= value;
    }
}
class Deck {
    constructor (){
        this.entireDeck= this.makeDeck();
    }

    //make deck function -  begin
    makeDeck (){
        let values=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
        let suits=["Club", "Heart", "Spade", "Diamond"]
        let deckOfCards = []; //declares an array variable that will hold multiple cards

        for(let s=0; s < suits.length; s++){
            console.log("suits:", suits[s])
            for(let x =0; x < values.length; x++){
                let card = new Card (suits[s], values[x], x+2);
                deckOfCards.push(card); //pushes an instance to the deckOfCards array
            }
        }
            deckOfCards= deckOfCards.sort((a,b) =>0.5-Math.random());
            console.log (deckOfCards);
            return deckOfCards;
        
    } //make deck function - end
}
const Ciera= new Deck ();
    playGame(Ciera.entireDeck);
function playGame(deck) {
    round = 1;
    let player1 = {
        hand: deck.splice(0,26),
    }
    let player2= {
        hand: deck.splice(0,26),
    }
let player1Score = [];
let player2Score = [];

    console.log("player1:",player1.hand);
    console.log("player2:",player2.hand);

    console.log(`Player 1 plays a ${player1.hand[0].face}; Player 2 plays a ${player2.hand[0].face}`);
// players currently have 26 cards each
// compare player cards
        //showing if player1 card is > player2 card
    if("player1  > players2 card"){
        console.log("give the winning player a point",);
        this.scorePlayer1++
    }

        //showing if player1 card is < player2 card
        else if("player2 > player1"){
        console.log("give the winning player a point",);
        this.scorePlayer2++
            }
            else (player1.hand[0].face === player2.hand[0].face);
            console.log("player1Score => player2Score");
                player1Score +=1
                player2Score +=1
                    alert ("Tie"); //if not > or < then it has to be =
            // no win; no points
//declare which player has the most point or if its a tie
        }
    console.log(`Player 1 score: ${this.scorePlayer1}`);
    console.log(`Player 2 score: ${this.scorePlayer2}`);
            if(this.scorePlayer1 > this.scorePlayer2){
                console.log("Player 1 Wins");
            }
            if(this.scorePlayer2 > this.scorePlayer1){
                console.log("Player 2 Wins");
            }
