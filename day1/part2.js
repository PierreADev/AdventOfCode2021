const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const inputArray = input.split("\n");

const numbersArray = inputArray.map(function(num){
    return parseInt(num, 10);
});

let counter = 0;

for (const [i, num] of numbersArray.entries()){
    if ((numbersArray[i] > 2) && ((numbersArray[i] + numbersArray[i-1] + numbersArray[i-2]) > numbersArray[i-1] + numbersArray[i-2] + numbersArray[i-3] )) {
        counter ++;
    }
};

console.log (counter); 