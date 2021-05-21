'use strict'

let num = 1
let numMax = 0

while (num != 0) {
    num = +prompt("Introduce un número:")
    if (numMax < num){
        numMax = num 
 }
}

console.log(numMax)