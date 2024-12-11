let numero = 0
let factorial = 1
let i = 0

numero = prompt("Ingresa el numero")
numero = parseInt(numero)

while(i < numero){
    i = i + 1
    console.log("Iterador: ",i)

    factorial = factorial * i
    console.log("Factorial: ",factorial)
}

console.log("El factorial es: ",factorial)


