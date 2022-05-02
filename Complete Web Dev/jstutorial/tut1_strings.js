// // console.log("Hello"+" "+"world");

const prompt=require("prompt-sync")();

// // var message = "Hello";
// // var myName = "Ani";

// // myName = prompt("Enter Your Name");

// // console.log(message+" there "+ myName);

// var message = prompt("enter your message");
// var ml = message.length;
// var wordcount = 140;


// // var diff = wordcount-ml;
// // console.log("You have written "+ml+" characters."+"You have "+diff+" characters left");

// console.log("Your messgae was "+ message.slice(0,140));

// console.log("Your messgae was, Now message ,length is "+(message.slice(0,wordcount)).length);

var myName = prompt("Enter Your Name");

var firstChar = myName.slice(0,1);

firstChar = firstChar.toUpperCase();

var remnName = myName.slice(1,);

remnName = remnName.toLowerCase();

console.log("The Name in capital letter is: "+firstChar+remnName);