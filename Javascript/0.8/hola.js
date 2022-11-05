
let precio = parseInt(prompt("Introduce el precio"))
let porcentaje = parseInt(prompt("Introduce el porcentaje"))

let PrecioFinal = precio - porcentaje/100 * precio 
document.write(PrecioFinal)