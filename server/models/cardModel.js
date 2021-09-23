const fs = require('fs');
const Deck = require('card-deck');
// const cardData = '../data/cards.json';
const cardData = './data/cards.json';
const { v4: uuid } = require('uuid');

/**
 * Read all cards in persistent storage.
 * @returns {array} of data in storage.
 */
const readCards = () => JSON.parse(fs.readFileSync(cardData));

const constructPlayingCard = cardData => {
    return {
        id: cardData.id,
        card: cardData.card,
        subType: cardData.subType,
        numberOfRolls: cardData.numberOfRolls,
        image: {
            icon: cardData.image.icon,
            main: cardData.image.main
        },
        value: cardData.value
    }
};


/**
 * Constructs an array of all playing cards, with all details required by the game already added to the cards
 * @returns {array} of all playing cards
 */
 const constructArrayOfCards = () => {
    const cards = [];
    readCards().forEach(cardType => {
        const numberOfCards = cardType.numberInDeck;
        [...Array(numberOfCards)].forEach(_card => cards.push(constructPlayingCard(cardType)));
    })
    return cards;
}

/**
 * Constructs a new deck with all required Sushi Go cards
 * @param {array} containing all cards required in the deck 
 * @returns {class object} containing 59 Sushi Go cards
 */
// const constructDeck = (cardArray) => new Deck(cardArray);


/**
 * Shuffles and deals cards to all players, placing the cards in their hand.
 * @param {array} players array of player objects
 * @param {number} maxCards the max number of cards to deal to each player
 * @returns {array} or players with shuffled cards in their hands
 */
const dealCardsToPlayers = (players, maxCards) => {
    const deck = new Deck(constructArrayOfCards());
    deck.shuffle();
    for(let i = 0; i < maxCards; i++) {
        players.forEach(player => {
            player.cardsInHand.push(deck.draw())
        })
    }
    return players;
}

module.exports = {
    readCards,
    constructPlayingCard,
    constructArrayOfCards,
    // constructDeck,
    dealCardsToPlayers
}