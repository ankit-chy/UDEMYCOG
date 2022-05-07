const prompt = require("prompt-sync")();

var n = prompt("Enter the number: ");

var arr = [];
count = 0;

for (let i = 0; i < n; i++) {
    count++;
    if (count%3 === 0 && count%5 === 0){
        arr.push("FizzBuzz");
    }
    else if (count%3 == 0){
        arr.push("Fizz");
    }
    else if (count%5 == 0){
        arr.push("Buzz");
    }
    else{
        arr.push(count);
    }
}

console.log(arr);