document.querySelectorAll("img")[0].style.width = "200px";
document.querySelectorAll("img")[1].style.width = "200px"
let player1 = Math.floor(Math.random() * 6 + 1)

console.log(player1)
var img = "dice-" + player1 + ".svg"
console.log(img)
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", img);


let player2 = Math.floor(Math.random() * 6 + 1);

console.log(player2);

var img2 = "dice-" + player2 + ".svg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", img2);



if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 is Winner"
}
else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 is Winner"
}
else {
    document.querySelector("h1").textContent = "Draw.. Refresh me again "

}