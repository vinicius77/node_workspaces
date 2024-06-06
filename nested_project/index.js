const lodash = require("lodash"); // Package is originated from the parent folder
const porreta = require("porreta"); // Package is from the actual subdirectory

console.log(porreta()); // pamonha
console.log(porreta()); // cangote

console.log(porreta.words);

let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

let fel = lodash.first(words);
let lel = lodash.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);
