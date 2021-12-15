const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const inputArray = input.split("\n");

let oxygenArray = inputArray;
let co2Array = inputArray;

//Looking for Oxygen Generator Rating
for (let i = 0; i < 12; i++) {
    let zeroCounter = 0;
    let oneCounter = 0;
    let arrayOfDigits;

    for (const line of oxygenArray){
        arrayOfDigits = line.split("");
        if (parseInt(arrayOfDigits[i], 10) > 0) {
            oneCounter++;
        } else {
            zeroCounter++;
        }
    }
    if (oneCounter > zeroCounter) { 
        oxygenArray = oxygenArray.filter(line => parseInt(line.split("")[i], 10) == 1)
        
    } else if (oneCounter < zeroCounter) {
        oxygenArray = oxygenArray.filter(line => parseInt(line.split("")[i], 10) == 0)
    } else if (oneCounter = zeroCounter) {
        oxygenArray = oxygenArray.filter(line => parseInt(line.split("")[i], 10) == 1)
    }
    if (oxygenArray.length == 1) {
        break;
    }
};

//Looking for co2 Scrubber Rating
for (let i = 0; i < 12; i++) {
    let zeroCounter = 0;
    let oneCounter = 0;
    let arrayOfDigits;

    for (const line of co2Array){
        arrayOfDigits = line.split("");
        if (parseInt(arrayOfDigits[i], 10) > 0) {
            oneCounter++;
        } else {
            zeroCounter++;
        }
    }
    if (oneCounter > zeroCounter) { 
        co2Array = co2Array.filter(line => parseInt(line.split("")[i], 10) == 0)
    } else if (oneCounter < zeroCounter) {
        co2Array = co2Array.filter(line => parseInt(line.split("")[i], 10) == 1)
    } else if (oneCounter = zeroCounter) {
        co2Array = co2Array.filter(line => parseInt(line.split("")[i], 10) == 0)
    }

    if (co2Array.length == 1) {
        break;
    }
};

const oxygenRating = parseInt(oxygenArray, 2);
const co2Rating = parseInt(co2Array, 2);

console.log("Oxygen Rating is " + oxygenRating);
console.log("CO2 Rating is " + co2Rating);
console.log("Life support rating of the submarine is " + (oxygenRating * co2Rating));