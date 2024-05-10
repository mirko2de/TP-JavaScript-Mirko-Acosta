let notaUno = parseInt(prompt("Ingrese la nota del alumno del primer trimestre del 1 al 10"));
let notaDos =parseInt(prompt("Ingrese la nota del segundo trimestre del 1 al 10"));
let notaTres = parseInt(prompt("Ingrese la nota del tercer trimestre del 1 al 10"));
let promedio = (notaUno + notaDos + notaTres) % 3

if (promedio >= 1 && promedio <=3){
    console.log("Nota Insuficiente");
}else if(promedio >= 4 && promedio <= 5){
    console.log("Nota regular");
}else if(promedio >=6 && promedio <= 7){
    console.log("Nota BUena");
}else if(promedio >= 8 && promedio <= 9){
    console.log("Nota Muy Buena");
}else if(promedio === 10){
    console.log("Nota Sobresaliente")
}else{
    console.log("Ingrese notas validas")
}

