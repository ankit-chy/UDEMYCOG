var dice1 = Math.random();
dice1 *= 6;
dice1 = Math.floor(dice1) + 1;
var src1 = "images/dice"+dice1.toString()+".png";

var dice2 = Math.random();
dice2 *= 6;
dice2 = Math.floor(dice2) + 1;
var src2 = "images/dice"+dice2.toString()+".png";

// console.log(src1);
// console.log(src2);

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

if(dice1 > dice2){
    document.querySelector("h1").innerHTML="Player 1 Win this time 🚩";
}
else if(dice1 < dice2){
    document.querySelector("h1").innerHTML="Player 2 Win this time 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw 😑";
}