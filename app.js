//Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = 'dice'+ randomNumber1 + '.png'

let randomImageSource = 'img/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)

// Player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource2 = 'img/dice'+ randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if( randomNumber1 > randomNumber2) {
    document.querySelector('footer').innerHTML = '🏆Player 1 venceu!'
}else if( randomNumber2 > randomNumber1) {
    document.querySelector('footer').innerHTML = '🏆Player 2 venceu!'
}else{
    document.querySelector('footer').innerHTML = 'Empate';
}