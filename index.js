


function randomNumber(){
    let min = 2;
    let max = 12;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


let firstCard = randomNumber()
let secondCard = randomNumber()
let sum = firstCard + secondCard
let hasBlackJack = false

if(sum <= 20) {
    console.log("Želiš li izvući još jednu kartu?")
}else if(sum === 21){
    console.log("Bravo! Dobili ste BlackJack (Ajnc)")
}else if( sum > 21){
    console.log("Ispali ste iz igre")
}

document.getElementById("suma").innerHTML = sum;