const prompt = require("prompt-sync")();

var userYear = prompt("Enter the year: ");

if( userYear%4 === 0 ){
    if( userYear%100 === 0 ){
        if( userYear%400 === 0 ){
            console.log(userYear+" is a LEAP YEAR")
        }
        else{
            console.log(userYear+" is NOT LEAP YEAR")
        }
    }
    else{
        console.log(userYear+" is a LEAP YEAR")
    }
}
else{
    console.log(userYear+" is NOT LEAP YEAR")
}