'use strict'

let num = prompt("Intruce un número")

Multiplicar(num)


function Multiplicar(num) {
for(let i = 1; i <= 10; i++) {
    console.log(num + "X" + i + "=" + num * i)
}
}


