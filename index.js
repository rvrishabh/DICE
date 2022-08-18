var randonNumber = Math.floor(Math.random() * 6) + 1;
var randomDice= "dice" + randonNumber + ".png";
var imagesource= "Images/" + randomDice;

document.querySelectorAll("img")[0].setAttribute("src", imagesource);

var randonNumber2 = Math.floor(Math.random() * 6) + 1;
var imagesource2 = "Images/dice" + randonNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imagesource2);

if (randonNumber>randonNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins🤩";
} else if (randonNumber2>randonNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🤩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

