'use strict'

let totMult = 0

for (let i = 0; i < 30; i++){
    let num = Math.random() * (1000) + 0
    num = num.toFixed(0)
    let div = num % 5
    if (div == 0){
        console.log(`${num} es multiplo de 5`)
        totMult++
    }
}

console.log(`Hay un total de ${totMult} multiplos de 5`)