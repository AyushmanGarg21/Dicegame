var rn1 = Math.floor(Math.random()*6)+1;
var rn2 = Math.floor(Math.random()*6)+1;

const x = document.images[0];
const y = document.images[1];



x.setAttribute("src","images/dice"+rn1+".png");
y.setAttribute("src","images/dice"+rn2+".png");

var winText = "";

if(rn1>rn2){
    winText = "🚩Player 1 Wins!"
}else if(rn1<rn2){
    winText = "Player 2 Wins!🚩"
}else{
    winText = "Match Draw!"
}

document.querySelector("h1").innerHTML = winText;