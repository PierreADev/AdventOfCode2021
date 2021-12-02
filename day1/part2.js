const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const inputArray = input.split("\n");

const numbersArray = inputArray.map(function(num){
    return parseInt(num);
});

console.log(numbersArray);

let counter = 0;

numbersArray.forEach(function(num, i){
    if ((numbersArray[i] > 2) && ((numbersArray[i] + numbersArray[i-1] + numbersArray[i-2]) > numbersArray[i-1] + numbersArray[i-2] + numbersArray[i-3] )) {
        counter ++;
    }
});

console.log (counter); 