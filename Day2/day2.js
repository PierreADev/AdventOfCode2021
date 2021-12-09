const { readFileSync } = require("fs");

const data = readFileSync("input.data", { encoding: "utf-8"});

const inputArray = data.split("\n" + "\r");

console.log(inputArray);
// convertir l'input en objet avec
//lire chaque ligne avec élément 1 = direction et élément 2 = valeur

//créer un compteur depth et un compteur horizontal

// ajouter values de forward à horizontal

// ajouter values de down à depth
// retirer values de up à depth


/*
array.forEach(element => {
    
});
switch (instruc) {
    case "forward":
        horizontal = horizontal + value;
        break;
    case "down":
        depth = depth + value;
    case "up": 
        depth = depth - value;
}
*/