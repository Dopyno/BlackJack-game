let firstCard;
let secondCard;
let thirdCard;
let message = ""
let cardsEL = document.getElementById("cards-el")
let sumEL = document.querySelector(".sum-el")
let messageEL = document.getElementById("message-el")
let sum ;
let total;

function startGame(){
    firstCard = Math.floor(Math.random()*15)
    secondCard = Math.floor(Math.random()*15)
    sum = firstCard + secondCard
    cardsEL.textContent = "Cards: " + firstCard + " and " + secondCard
    if(sum <= 20){
        message = "Do you want to draw a new card?  🙂"
        messageEL.textContent = message
        sumEL.textContent = "Sum: " + sum
    }else if(sum === 21){    // === means strictly equal with 21
       message = "Woohooo, You've got Blackjack!  🥳"
       messageEL.textContent = message
       sumEL.textContent = "Sum: " + sum
    }else{
       message = "You're out of the game!  😭"
       messageEL.textContent = message
       sumEL.textContent = "Sum: " + sum
    }
}

function addCard(){
    thirdCard = Math.floor(Math.random()*15)
    total  = sum + thirdCard
    cardsEL.textContent = "Cards: " + firstCard + " , " + secondCard + " and " + thirdCard
    if(total < 21){
        message = "Do you want to draw a new card?  🙂"
        messageEL.textContent = message
        sumEL.textContent = "Sum: " + total
    }else if(total === 21){
        message = "Woohooo, You've got Blackjack!  🥳"
       messageEL.textContent = message
       total = sum + thirdCard
       sumEL.textContent = "Sum: " + total
    }else{
        message = "You're out of the game!  😭"
       messageEL.textContent = message
       sumEL.textContent = "Sum: " + total
    }
}

