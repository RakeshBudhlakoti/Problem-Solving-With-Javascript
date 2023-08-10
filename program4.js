//Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. Bill amount and tip percentage will be input parameters while output will be calculated tip value.

function tipCalculator(amount,percentage){
    return (amount * percentage)/100;
}
console.log(tipCalculator(300,15));
