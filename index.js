console.log("Card Game Of War!");

class Card {
  constructor(suit, face, value) {
    this.suit = suit;
    this.face = face;
    this.value = value;
    }
}
class Deck {
  constructor() {
    this.deckOfCards = [];
    // this.entireDeck = this.makeDeck();
}

  //make deck function -  begin
    makeDeck() {
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        let suits = ["Club", "Heart", "Spade", "Diamond"];

    for (let s = 0; s < suits.length; s++) {
      console.log("suit:", suits[s]);
      for (let x = 0; x < values.length; x++) {
        let card = new Card(suits[s], values[x], x + 2);
        this.deckOfCards.push(card); //pushes an instance to the deckOfCards array
        }
        console.log(this.deckOfCards.length);
    }
};
// function-ended

    shuffleDeck() {
    for(let i = this.deckOfCards.length - 1; i > 0; i--){
        let j= Math.floor(Math.random() * (i+1));
        let tempIndex = this.deckOfCards[i];
        this.deckOfCards[i] = this.deckOfCards[j];
        this.deckOfCards[j] = tempIndex;
        }
        // return shuffleDeck;
    }
    deal()  {
        console.log("deal");
        let card = this.deckOfCards();
        console.log(card + " has been drawn from the deck.")
        }
    }

class Player {
    constructor (name)  {
        this.name= name;
        this.point= 0;
        this.playerHand= [];
    }
}
let player1= new Player("Ciera");
let player2= new Player("Molly");


class Game  {
    constructor()   {
        this.players= [];
    }
    start() {
        this.players.push(new Player("Ciera"));
        this.players.push(new Player("Molly"));
        console.log('War', this.players);

        let myDeck= new Deck ();
        myDeck.makeDeck();

        // let shuffleDeck= myDeck.shuffleDeck();
        myDeck.shuffleDeck();
        myDeck.deal();

        this.playGame();
        this.endGame();
        }

playGame () {
    console.log('War');
    let player1 = this.players[0];
    let player2 = this.players[1];
    console.log("player 1 is :" + player1 + " player2 is " + player2);
      let roundWinner = '';
      let turn = 0;

    for(let i=0; i <26; i++){


    if(player1Card.value > player2Card.value){
        roundWinner= player1.name;
        player1.points +=1;
    }
    else if (player2Card.value > player1Card.value){
        roundWinner = player2.name;
        player2.points +=1;        
    }
    else {
        console.log('Players Tie');
        }
    }
}
endGame() {
    let gameWinner= '';
    let player1 = this.players[0];
    let player2 = this.players[1];
    let winnerPoints = 0;

    if(player1.points > player2.points){
        gameWinner = player1.name;
        winnerPoints = player1.points;
    } else if (player2.points > player1.points){
        gameWinner = player2.name;
        winnerPoints = player2.points;
    } else {
        alert("Game Over");
        }
    }
}
newGame= new Game();
newGame.start();
let deck= new Deck ();
console.log(deck);