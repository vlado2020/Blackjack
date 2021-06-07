


function randomNumber(){
    let min = 2;
    let max = 12;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


let cards = []

let firstCard = randomNumber()
cards.push(firstCard)

let secondCard = randomNumber();
cards.push(secondCard)


if(cards.length === 0){
let firstCard = randomNumber()
cards.push(firstCard)

let secondCard = randomNumber();
cards.push(secondCard)
console.log(cards)
}

let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true;
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newEl = document.getElementById("new-el")




function startGame(){
    renderGame()
}

function renderGame(){

cardEl.textContent = "Karte: "
for(let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " \n "
}
if(sum <= 20) {
    console.log(firstCard, secondCard, sum)
    message = "Želiš li izvući još jednu kartu?"
}else if(sum === 21){
    message = "Bravo! Dobili ste BlackJack (Ajnc)"
    hasBlackJack = true;
    setTimeout(function (){clearAll() }, 3000);
}else if( sum > 21){
    message = "Ispali ste iz igre"
    isAlive = false;
    setTimeout(function (){clearAll() }, 3000);
}

// Cash out!
    messageEl.textContent = message;
    sumEl.textContent = "Zbroj: " + sum
}

function newCard(){
    let newCard  = randomNumber();
    sum += newCard
    cards.push(newCard)
    console.log(cards);
    newEl.textContent = "Nova karta: " + newCard
    renderGame()
    // Cash out!
}


function clearAll(){
    cards.length = 0;
    sum = 0;
    sumEl.textContent = "Zbroj: "
    cardEl.textContent = `Karte: `
    newEl.textContent = 'Nova karta '
}

