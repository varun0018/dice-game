var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gets random number
var image1 = "dice" + randomNumber1 + ".png"; //getting random images
var image1Source = "images/" + image1; //getting source image location
var img1 = document.querySelectorAll("img")[0]; //selecting image from the page
img1.setAttribute("src", image1Source); //change image source


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "dice" + randomNumber2 + ".png";
var image2Source = "images/" + image2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", image2Source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player-1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player-2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}