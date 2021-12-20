const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

let lanternfish = input.split(",").map(Number);

let timer8 = 0;
let timer7 = 0;
let timer6 = 0;
let timer5 = 0;
let timer4 = 0;
let timer3 = 0;
let timer2 = 0;
let timer1 = 0;
let timer0 = 0;



for (const fish of lanternfish) {
    switch (fish) {
        case 0: 
            timer0++;
            break;
        case 1: 
            timer1++;
            break;
        case 2:
            timer2++;
            break;
         case 3:
            timer3++;
            break;
        case 4:
            timer4++;
            break;
        case 5:
            timer5++;
            break;
        case 6:
            timer6++;
            break;
        default:
            console.log('Oopsie, something went wrong');
    }
}
for (let day = 0; day < 256; day++) {
    let storedTimer = timer0;
    timer0 = timer1;
    timer1 = timer2;
    timer2 = timer3;
    timer3 = timer4;
    timer4 = timer5;
    timer5 = timer6;
    timer6 = timer7 + storedTimer;
    timer7 = timer8;
    timer8 = storedTimer;    
}
    
const totalFish = timer0 + timer1 + timer2 + timer3 + timer4 + timer5 + timer6 + timer7 + timer8;

console.log('Total fish is ' + totalFish);