const prompt = require("prompt-sync")();

var name=prompt("Enter Your Name: ");
var crushName=prompt("Enter Your Crush's Name: ");

var n = Math.random();
n *= 100;
n = Math.floor(n) +1;

if(n>70){
    // console.log("Love Percentage  😍😍"+n+"%");
    console.log("You are made for each other")
}
else{
    console.log("Find another one");
}

// == is equal to (but data type doesn't matters)
// === is equal to (data type is also checked)
// !== is not equal to
// > is greater than
// < is lesser than
// >= is greater or equal to
// <= is lesser or equal to