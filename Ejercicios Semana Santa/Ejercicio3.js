'use strict'

let  i = Number(prompt("Introduzca el primer número"))
let  k = Number(prompt("Introduzca el segundo número"))

division(i,k)

function division(i,k) {
if (i == 0) {
    console.log("El primero número es 0");
} else {
    console.log(i / k)
}
}
