let numeroUno = parseInt(prompt("Ingrese el primer número:"));
let numeroDos = parseInt(prompt("Ingrese el segundo número:"));
let numeroTres = parseInt(prompt("Ingrese el tercer número:"));
let temp;

if (numeroUno > numeroDos) {
    temp = numeroUno;
    numeroUno = numeroDos;
    numeroDos = temp;
}
if (numeroDos > numeroTres) {
    temp = numeroDos;
    numeroDos = numeroTres;
    numeroTres = temp;
}
if (numeroUno > numeroDos) {
    temp = numeroUno;
    numeroUno = numeroDos;
    numeroDos = temp;
}

console.log("Los números ordenados de forma ascendente son: " + numeroUno + ", " + numeroDos + ", " + numeroTres);