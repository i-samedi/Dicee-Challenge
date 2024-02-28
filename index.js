var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

// console.log(randomNumber1);

if (randomNumber1 == 1){
    document.querySelector("img").setAttribute("src","./images/dice1.png");
}else if(randomNumber1 == 2){
    document.querySelector("img").setAttribute("src","./images/dice2.png");
}else if(randomNumber1 == 3){
    document.querySelector("img").setAttribute("src","./images/dice3.png");
}else if(randomNumber1 == 4){
    document.querySelector("img").setAttribute("src","./images/dice4.png");
}else if(randomNumber1 == 5){
    document.querySelector("img").setAttribute("src","./images/dice5.png");
}else {
    document.querySelector("img").setAttribute("src","./images/dice6.png");
}

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

var winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    winner.textContent = "🚩 Player 1 Wins!";
}else if (randomNumber2 > randomNumber1){
    winner.textContent = "Player 2 Wins! 🚩";
}else{
    winner.textContent = "Draw!";
}