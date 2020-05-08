// Deck of Cards

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

  initializeDeck() {
    const { suits, values, deck } = this;

    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },

  drawCard() {
    const card = this.deck.pop(); // --> pops last (top) card in the deck
    this.drawnCards.push(card); // --> pushes selected card into drawn cards
    return card;
  },

  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }

    return cards;
  },

  // Fisher-Yates shuffle algorithm
  shuffle() {
    const { deck } = this;
    // loop through arr backwards
    debugger;
    for (let i = deck.length - 1; i > 0; i--) {
      // pick rand idx before current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap (destructuring shorthand)
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
};

// 0: {value: "2", suit: "hearts"}
// 1: {value: "2", suit: "diamonds"}
// 2: {value: "2", suit: "spades"}
// 3: {value: "2", suit: "clubs"}
// 4: {value: "3", suit: "hearts"}
// 5: {value: "3", suit: "diamonds"}
// 6: {value: "3", suit: "spades"}
// 7: {value: "3", suit: "clubs"}
// 8: {value: "4", suit: "hearts"}
// 9: {value: "4", suit: "diamonds"}
// 10: {value: "4", suit: "spades"}
// etc...
