/* 
//* Dispensador de golosionas online
//* El programa deberá leer la moneda que ingrese el usuario, posteriormente se debe elegir en el siguiente menu 4 opciones:

//* 1. Gaseosa: S/4
//* 2. Papitas: S/2
//* 3. Oreo: S/1
//* 4. Chupetin: S/3

//* El programa deberá escribir el vuelto restante al producto que se elegió y de caso contrario deberás decirle que no cuenta con saldo suficiente.
*/


//Declaración de variables
let precioGaseosa = 4
let precioPapitas = 2
let precioOreo = 1
let precioChipetin = 3
let vuelto = 0

//Leer datos
let moneda = prompt("Ingresa la moneda")
let opcion = prompt(`
    ================================
    1. Gaseosa: S/ 4.00
    2. Papitas: S/ 2.00
    3. Oreo: S/ 1.00
    4. Chupetin: S/ 3.00
    ===================+============
    INGRESA UNA OPCIÓN:
`)

//Conversión a Int
moneda = parseInt(moneda)
opcion = parseInt(opcion)

//Para opcion 1
if(opcion == 1){
    if(moneda >= precioGaseosa){
        vuelto = moneda - precioGaseosa
    }else{
        console.log("No cuenta con saldo suficiente")
    }
}

if(opcion ==2){
    if(moneda >= precioPapitas){
        vuelto = moneda - precioPapitas
    }else{
        console.log("No cuenta con saldo suficiente")
    }
}

if(opcion ==3){
    if(moneda >= precioOreo){
        vuelto = moneda - precioOreo
    }else{
        console.log("No cuenta con saldo suficiente")
    }
}

if(opcion ==4){
    if(moneda >= precioChipetin){
        vuelto = moneda - precioChipetin
    }else{
        console.log("No cuenta con saldo suficiente")
    }
}

console.log("Tu vuelto es: S/", vuelto)



