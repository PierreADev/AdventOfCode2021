const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const vents = input.split("\n");

let points = [];

function Point(x, y, occurence) {
    this.x = x;
    this.y = y;
    this.occurence = occurence;
}

for (const vent of vents) {
    const [startPoint, endPoint] = vent.split (" -> ");
    const [x1, y1] = startPoint.split (',').map(Number);
    const [x2, y2] = endPoint.split (',').map(Number);

    if ((x1 == x2) && ((y1 - y2) > 0)) {
        for (let i = y2; i < (y1 + 1); i++) {
            const yExists = (point) => (point.x == x1 && point.y == i);
            if (points.findIndex(yExists) > -1) {
                points[points.findIndex(yExists)].occurence ++;
            } else {
                   points.push(new Point (x1, i, 1));
               }
        }    
    } else if ((x1 == x2) && ((y1 - y2) < 0)) {
        for (let i = y1; i < (y2 + 1); i++) {
            const yExists = (point) => (point.x == x1 && point.y == i);
            if (points.findIndex(yExists) > -1) {  
                points[points.findIndex(yExists)].occurence ++; 
            } else {
                points.push(new Point (x1, i, 1));
                }
        }
    } else if ((y1 == y2) && ((x1 - x2) > 0)) {
        for (let i = x2; i < (x1 + 1); i++) {
            const xExists = (point) => (point.y == y1 && point.x == i);
            if (points.findIndex(xExists) > -1) {  
                points[points.findIndex(xExists)].occurence ++; 
            } else {
                points.push(new Point (i, y1, 1));
            }
        }    
    } else if ((y1 == y2) && ((x1 - x2) < 0)) {
        for (let i = x1; i < (x2 + 1); i++) {
            const xExists = (point) => (point.y == y1 && point.x == i);
            if (points.findIndex(xExists) > -1) {  
                points[points.findIndex(xExists)].occurence ++;
            } else {
                points.push(new Point (i, y1, 1));
            }
        }
    } else if ((y2 - y1)/(x2 - x1) == 1) {
        if (x1 < x2) {
            let newX = x1;
            let newY = y1;
            for (let i = x1; i < (x2 + 1); i++) {
                const pointExists = (point) => (point.x == newX && point.y == newY);
                if (points.findIndex(pointExists) > -1) {
                    points[points.findIndex(pointExists)].occurence ++;
                } else {
                    points.push(new Point (newX, newY, 1));
                }
                newX++;
                newY++;
            }
        } else {
            let newX = x2;
            let newY = y2;
            for (let i = x2; i < (x1 + 1); i++) {
                const pointExists = (point) => (point.x == newX && point.y == newY);
                if (points.findIndex(pointExists) > -1) {
                    points[points.findIndex(pointExists)].occurence ++;
                } else {
                    points.push(new Point (newX, newY, 1));
                }    
                newX++;
                newY++;
            }        
        }
    } else if ((y2 - y1)/(x2 - x1) == -1) {
        if (x1 < x2) {
            let newX = x1;
            let newY = y1;
            for (let i = x1; i < (x2 + 1); i++) {
                const pointExists = (point) => (point.x == newX && point.y == newY);
                if (points.findIndex(pointExists) > -1) {
                    points[points.findIndex(pointExists)].occurence ++;
                } else {
                    points.push(new Point (newX, newY, 1));
                } 
                newX++;
                newY--;
            }   
        } else {
            let newX = x2;
            let newY = y2;
            for (let i = x2; i < (x1 + 1); i++) {
                const pointExists = (point) => (point.x == newX && point.y == newY);
                if (points.findIndex(pointExists) > -1) {
                    points[points.findIndex(pointExists)].occurence ++;
                } else {
                    points.push(new Point (newX, newY, 1)); 
                   } 
                   newX++;
                   newY--;
                }
        }    
    }    
}

//créer une boucle sur points et compter le nombre d'objets avec occurence > 1
let overlaps = 0;
for (const point of points) {
    if (point.occurence > 1) {
        overlaps++;
    }
}

console.log(overlaps);
