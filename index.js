//initialise
let cards = []
let sum = 0
let isAlive = false
let isBlackjack = false
let message = ""
//elemental variables
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-el")

//functions
function getRandomCard(){
    let randomcard = Math.floor(Math.random()*13 + 1)
    if (randomcard === 1){
        return 11
    } else if (randomcard > 10){
        return 10
    } else{
        return randomcard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

    function renderGame(){
    sumEl.textContent = "Sum: " + sum 
    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20){
        message = "Do you want to draw another card?"
        isAlive = true
    } else if (sum === 21){
        message = "You have the black jack!"
        isBlackjack = true
    } else if (sum > 21){
        message = "oops, you are outta the game!"
        isAlive = false
    }
    messageEl.textContent = message

}


function newCard(){
    if(isAlive === true && isBlackjack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}