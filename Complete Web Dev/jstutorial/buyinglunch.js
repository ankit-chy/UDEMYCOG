const prompt = require("prompt-sync")();

var name=["Angela", "Ben", "Jenny","Michael","Chloe"];

//Generating Random Number

var n = Math.random();
n *= name.length;
n = Math.floor(n);

console.log(name[n]+" is going to buy Lunch.");
