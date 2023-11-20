let player = {
    name: "John",
    chips: 100
}
let cards = []
let sum = 0;

let hasBlackjack = false;
let isAlive = false;

let message = "";

let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector(".player-el");

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {

    // Reset game state
    cards = [];
    sum = 0;
    hasBlackjack = false;
    isAlive = true;

    // Clear previous cards from display
    cardsEl.textContent = "Cards: ";

    // Deal two new cards
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
    } else {
        message = "You lost! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
    score();
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function score() {
    if (hasBlackjack === true) {
        player.chips += 10
    }
    if (hasBlackjack === false && isAlive === false) {
        player.chips -= 10
    }
    playerEl.textContent = player.name + ": $ " + player.chips;
}

