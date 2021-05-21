'use strict'

let dNac = prompt("Introduzca su día de nacimiento: ")
let mNac = prompt("Introduzca su mes de nacimiento: ")
let aNac = prompt("Introduzca su año de nacimiento: ")
let dAct = prompt("Indtroduzca el día actual: ")
let mAct = prompt("Introduzca el mes actual: ")
let aAct = prompt("Introduzca el año actual: ")

let difA = aAct - aNac


if (difA > 65){
    console.log("Estás jubilado")
} else if (difA < 65){
        console.log("No estás jubilado")
    } else {
        if (mAct > mNac){
            console.log(" Estás jubilado")
        } else if (mAct < mNac){
            console.log("No estás jubilado")
        } else {
            if (dAct > dNac){
                console.log("Estás jubilado")
            } else if (dAct < dNac){
                console.log("No estás jubilado")
            } else {
                console.log("Te jubilas hoy!")
            }
        }
    }
