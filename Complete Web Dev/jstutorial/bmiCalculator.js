const prompt = require("prompt-sync")();

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight , height){

    var bmi = (weight/(height*height));

    if( bmi<18.5){
        console.log("Your BMI is "+Math.round(bmi)+", so you are under weight.");
    }
    if(bmi>=18.5 && bmi<=24.9){
        console.log("Your BMI is "+Math.round(bmi)+" so you have a normal weight.");
    }
    if(bmi>24.9){
        console.log("Your BMI is "+Math.round(bmi)+" You are over-weight.");
    }
}

var weight=prompt("Enter Your Weight: ");
var height=prompt("Enter Your height: ");

bmiCalculator(weight,height);






/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
