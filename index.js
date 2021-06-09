


function randomNumber() {
    let temp = Math.floor(Math.random() * 13) + 1; //The maximum is exclusive and the minimum is inclusive
    // smanjivanje udjela velikih brojeva
    // console.log("prvi temp", temp)
    // if(temp >6){
    //     temp = Math.floor(Math.random()*temp)
    //     if(temp === 0){
    //         temp+=1
    //     }
    // }
    // console.log("drugi temp", temp)
    if (temp > 10) {
        return 10
    } else if (temp === 1) {
       temp = 11
       return temp
    } else {
        return temp;
    }
}


let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let messageEl = document.getElementById("messageEl")
let sumEl = document.getElementById("sumEl")
let cardEl = document.getElementById("cardEl")
let newEl = document.getElementById("newEl")
let convertAce = document.getElementById("convertAce")


function convertAceToOne(){
     if(cards.includes(11)){
        let index = cards.indexOf(11);
        cards[index] = 1;
    }
    console.log("tu sam")
    sum = cards.reduce((partial_sum, a) => partial_sum + a,0);
    renderGame()
}

function startGame() {
    clearAll();
    isAlive = true;
    let firstCard = randomNumber()
    cards.push(firstCard)

    let secondCard = randomNumber();
    cards.push(secondCard)

   sum = cards.reduce((partial_sum, a) => partial_sum + a,0);
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Karte: "
    sumEl.textContent = "Zbroj: " + sum

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " \n "
    }
    if (sum <= 20) {
        message = "Želiš li izvući još jednu kartu?"
    } else if (sum === 21) {
        message = "Bravo! Dobili ste BlackJack (Ajnc)"
        hasBlackJack = true;
        setTimeout(function () { clearAll() }, 2000);
    } else if (sum > 21) {
        message = "Ispali ste iz igre"
        isAlive = false;
        setTimeout(function (){clearAll() }, 2000);
    }
    messageEl.textContent = message;
}

function newCard() {
    if( isAlive === true && hasBlackJack === false){
  let newCard = randomNumber();
    sum += newCard
    cards.push(newCard)
    console.log(cards);
    newEl.textContent = "Nova karta: " + newCard
    renderGame()
    } 
}


function clearAll() {
    isAlive = false;
    cards.length = 0;
    sum = 0;
    sumEl.textContent = "Zbroj: "
    cardEl.textContent = `Karte: `
    newEl.textContent = 'Nova karta: '
}

