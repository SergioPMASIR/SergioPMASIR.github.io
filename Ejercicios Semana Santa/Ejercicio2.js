'use strict'

let numero = Number(prompt("Intruzca un número"))
MostrarTemperatura(numero)
function MostrarTemperatura(Kelvin,Fh){
    Fh = Number((numero * 9 / 5) + 32)
    Kelvin = Number(numero + 273.5)
    console.log ("Temperatura en Fh " + Fh)
    console.log ("Temperatura en Kelvin " + Kelvin)
}

