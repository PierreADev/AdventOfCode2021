const { readFileSync } = require("fs");

const data = readFileSync("input.data", { encoding: "utf-8"});

const inputArray = data.split("\n");

let horizontal = 0;
let depth = 0;

for (const line of inputArray){

    const [instruction, value] = line.split(' ');

    switch (instruction) {
        case 'forward':
            horizontal += parseInt(value, 10);
            break;
        case 'down':
            depth += parseInt(value, 10);
            break;
        case 'up': 
            depth -= parseInt(value, 10);
            break;
        default:
            throw new Error('input error');
    }
}

console.log(horizontal * depth);