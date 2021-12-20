const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

let lanternfish = input.split(",").map(Number);

for (let day = 0; day < 256; day++) {
    let newFish = [];
    for (i = 0; i < lanternfish.length; i++) {
        if (lanternfish[i] === 0) {
            newFish.push(8);
            lanternfish[i] = 6;
        } else {
            lanternfish[i]--;
        }    
    }
    for (const fish of newFish) {
        lanternfish.push(fish);
    }  
};
console.log(lanternfish.length);