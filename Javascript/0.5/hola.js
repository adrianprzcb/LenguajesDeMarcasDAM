let radio = parseInt(prompt("Introduce el rádio del circulo"))

let area1 = Math.PI * Math.pow(radio, 2)
let area = area1.toFixed(2)
document.write("El area es "+ area + "</br>") 

let perimetro1 = 2*Math.PI * radio 
let perimetro = perimetro1.toFixed(2)
document.write("El perimetro es " + perimetro)
 

