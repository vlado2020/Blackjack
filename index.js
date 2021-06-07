


function randomNumber(){
    let min = 2;
    let max = 12;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



let firstCard;
let secondCard;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true;
let messageEl = document.getElementById("message-el")
console.log(messageEl)


function startGame(){
let firstCard = randomNumber();
let secondCard =randomNumber();
let sum = firstCard + secondCard
if(sum <= 20) {
    console.log(firstCard, secondCard, sum)
    message = "Želiš li izvući još jednu kartu?"
}else if(sum === 21){
    message = "Bravo! Dobili ste BlackJack (Ajnc)"
    hasBlackJack = true;
}else if( sum > 21){
    message = "Ispali ste iz igre"
    isAlive = false;
}

// Cash out!

console.log(message)
}


// document.getElementById("suma").innerHTML = sum;