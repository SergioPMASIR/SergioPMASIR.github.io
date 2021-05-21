'use strict'

let cantidad = prompt("Cantidad: ")
let precio = prompt("Precio por unidad: ")

if (cantidad >= 0 && cantidad <= 10){
    var descuento = 0 
} else if (cantidad <= 30){
    var descuento = 0.05
} else if (cantidad <= 50){
    var descuento = 0.10
} else {
    var descuento = 0.15
}

let precioFinal = cantidad * (precio - (precio * descuento))
console.log(precioFinal)





