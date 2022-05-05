const prompt = require("prompt-sync")();

function lifeInWeeks(age) {
    
        var leftAge = 90 - age; 
        
        var ageInMonth = leftAge*12;
        var ageInWeek = leftAge*52;
        var ageInDays = leftAge*365;
        console.log("You have",ageInDays,"days,",ageInWeek,"weeks, and",ageInMonth,"months left.");
}

var givenAge = prompt("Enter the age: ");
lifeInWeeks(givenAge);