const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });


const inputArray = input.split("\n");

const numbersArray = inputArray.map(function(num){
    return parseInt(num);
});

let counter = 0;

numbersArray.forEach(function(num, i){
    if (numbersArray[i] > numbersArray[i-1]) {
        counter ++;
    }
})

console.log (counter); 