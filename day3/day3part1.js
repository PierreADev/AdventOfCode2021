const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const inputArray = input.split("\n");



let gammaArray = [];
let epsilonArray = [];

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
    if (zeroCounter > oneCounter) {
        gammaArray.push("0");
        epsilonArray.push("1");
    } else {
        gammaArray.push("1");
        epsilonArray.push("0");
    }
};

const gammaBinary = gammaArray.join('');
const epsilonBinary = epsilonArray.join('');

const epsilon = parseInt(epsilonBinary, 2);
const gamma = parseInt(gammaBinary, 2);

console.log(epsilon * gamma);