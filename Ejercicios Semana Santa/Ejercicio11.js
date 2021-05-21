'use strict'

let n = prompt("Introduce un número entero: ")
let i = 1
while(i <= n) {
    console.log(`El cuadrado de ${i} es` + " " + i ** 2  + " " + `y el cubo de ${i} es` + " "  +  i ** 3)
    i++
}