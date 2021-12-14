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
        for (const line of inputArray){
            arrayOfDigits = line.split("");
            if (parseInt(arrayOfDigits[i], 10) > 0) {
                oneCounter++;
            } else {
                zeroCounter++;
            }
        }
        console.log("One Counter is " + oneCounter);
        console.log("Zero Counter is " + zeroCounter);
        
        if (oneCounter > zeroCounter) { 
            for (const line of oxygenArray) {
                if (line.charAt(i) == '0') {
                    oxygenArray.splice(line, 1);

                }

            }
        } else {
            for (const line of oxygenArray) {
                if (line.charAt(i) == '1') {
                    oxygenArray.splice(line, 1);

                }
            }
            console.log(oxygenArray);    
        }
};
//Looking for co2 Scrubber Rating
for (let i = 0; i < 12; i++) {
    let zeroCounter = 0;
    let oneCounter = 0;
    
    let arrayOfDigits;
        for (const line of inputArray){
            arrayOfDigits = line.split("");
            if (parseInt(arrayOfDigits[i], 10) > 0) {
                oneCounter++;
            } else {
                zeroCounter++;
            }
        }
        if (oneCounter > zeroCounter) { 
            for (const line of co2Array) {
                if (line.charAt(i) == '1') {
                    co2Array.splice(line, 1);

                }

            }
        } else {
            for (const line of co2Array) {
                if (line.charAt(i) == '0') {
                    co2Array.splice(line, 1);

                }
            }    
        }
};

const oxygenRating = parseInt(oxygenArray, 2);
const co2Rating = parseInt(co2Array, 2);

console.log("Life support rating of the submarine is " + (oxygenRating * co2Rating));