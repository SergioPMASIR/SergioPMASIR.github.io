'use strict'
let totMen = 0
let totAdu = 0
let totJub = 0
let edades = prompt("Edades: ")

while(edades != 0) {
    edades = prompt("Más edades: ")
    if (edades >= 0 && edades <= 17){
        totMen++
    } else if (edades >= 18 && edades < 65){
        totAdu++
    } else if (edades >= 65 && edades <= 150){
        totJub++
    } else {
        alert("Edad fuera de intervalo, introduzca una edade entre 1 y 150 años")
    }
    
}

console.log(`El total de menores es ${totMen}, el de adultos es ${totAdu} y el de jubilados es ${totJub}`) 