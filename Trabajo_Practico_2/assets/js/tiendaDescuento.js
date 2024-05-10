let producto = prompt("Ingrese el nombre del producto")
let compra = parseInt(prompt("Ingrese la cantidad de compra"));
let unidad = parseInt(prompt("Ingrese el monto por unidad"));
let total = compra * unidad
let desc = total - ( total * 0.15)

switch(true) {
    case total >= 20000 && unidad >= 10:
        console.log(`Va a pagar con el descuento aplicado el total de ${desc}`);
        break
    case total >=1:
        console.log(`Pagara el total de ${total}`);
        break
    default:
        console.log("No realizo ninguna compra ")    
}