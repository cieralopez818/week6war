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
    this.entireDeck = this.makeDeck();
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
    }
};
    shuffleDeck() {
    for(let i = this.deck - 1; i > 0; i--){
        let j= Math.floor(Math.random() * (i+1));
        let tempIndex = this.deck[i];
        this.deck[i] = this.deck[j];
        this.desk[j] = tempIndex;
        }
        return shuffleDeck;
    }
    deal()  {
        console.log("deal");
        let card = this.deck.pop();
        console.log(card + " has been drawn from the deck.")
        }
    }

class players {
    constructor (name)  {
        this.name= name;
        this.point= 0;
        this.hands= hands
    }
}
class Game  {
    constructor()   {
        this.player= [];
    }
    start() {
        this.players.push(new Players);
        this.players.push(new Players);
        console.log('War', this.players);

        let myDeck= new Deck ();
        myDeck.createDeck();

        let shuffleDeck= myDeck.shuffleDeck();
        myDeck.dealDeck(this.players, shuffleDeck);

        this.playGame();
        this.endGame();
        }

playGame () {
    console.log('War');
    let player1 = this.players[0];
    let player2 = this.players[1];

    let roundWinner = '';
    let turn = 0;

    while(player1.hands.length!==0 && player2.hands.length!==0){
        let player1Card= player1.hands.pop();
        let player2Card= player2.hands.pop();

    if(player1Card.value > player2Card.value){
        roundWinner= player1.name;
        player1.points +=1;
    }
    else if (player2Card.value > player1Card.value){
        roundWinner = player2.name;
        player2.points +=1;        
    }
    else {
        console.log()
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