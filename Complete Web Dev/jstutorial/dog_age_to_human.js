const prompt=require("prompt-sync")();

var dogAge = prompt("Enter Dog Age");
var humanAge = ((dogAge-2)*4 + 21);
console.log("The Human Age is: "+humanAge);