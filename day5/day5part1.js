const { readFileSync } = require("fs");

const input = readFileSync("input.data", { encoding: "utf-8" });

const vents = input.split("\n");

let diagram = [];

function Point(x, y, occurence) {
    this.x = x;
    this.y = y;
    this.occurence = occurence;
}

for (const vent of vents) {
    const [startPoint, endPoint] = vent.split (" -> ");
    const [x1, y1] = startPoint.split (',').map(Number);
    const [x2, y2] = endPoint.splint (',').map(Number);

    switch (vent) {
        case ((x1 == x2) && ((y1 - y2) > 0)) :
           for (let i = y1; i = y2; i--) {
               //rajouter le cas si le point n'existe pas, le créer
               diagram.push(new Point(x,))
               // else occurence ++;

               //ajouter les autres cas
           } 

    }
}

//créer une bouche sur diagram et compter le nombre d'objets avec occurence > 1