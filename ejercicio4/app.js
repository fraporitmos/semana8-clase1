let numeroMagico = 19
let intentos = 1
let numeroUsuario = 0

numeroUsuario = prompt("Ingresa el numero")
numeroUsuario = parseInt(numeroUsuario)

while(intentos < 8){

    if(numeroMagico == numeroUsuario){
        console.log("Ganaste, adivinaste el número.")
        console.log("Numero de Intentos", intentos)

        break;
    }else{
        intentos = intentos + 1
        numeroUsuario = prompt("Fallaste, Intenta de nuevo:")
        numeroUsuario = parseInt(numeroUsuario)
    }

}

if(intentos == 8){
    console.log("Perdiste, has usado todos los intentos.")
}

