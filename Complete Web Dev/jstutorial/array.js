const prompt = require("prompt-sync")();

var guestList=["Ani","Anmol","Dheeraj","Nandan"];

var name=prompt("Enter Your Name: ");

if(guestList.includes(name)){
    console.log("Welcome Dear "+name);
}
else{
    console.log("Sorry s! MaybeNext Time");
}