const prompt = require("prompt-sync")();

var n = prompt("Enter the terms to print: ");
var n1 = 0, n2 = 1, nextTerm;
for (var i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// var n = prompt("Enter the number: ");

// var arr = [0,1];
// var sum = 1;

// for(i=2; i<n; i++){
//     sum = arr[i-2] + arr[i-1];
//     arr.push(sum);    
// }

// console.log(arr)