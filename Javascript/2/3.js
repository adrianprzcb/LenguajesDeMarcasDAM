let numero = parseInt(prompt("Introduce un número entre 2 y 10"))

if(numero<2 || numero>10){
    document.write("Escribe un número entre 2 y 10.")
}
else{
    document.write(numero + " por 1 es " + numero*1 + "</br>" )
    document.write(numero + " por 2 es " + numero*2 + "</br>")
    document.write(numero + " por 3 es " + numero*3 + "</br>")
    document.write(numero + " por 4 es " + numero*4 + "</br>")
    document.write(numero + " por 5 es " + numero*5 + "</br>")
    document.write(numero + " por 6 es " + numero*6 + "</br>")
    document.write(numero + " por 7 es " + numero*7 + "</br>")
    document.write(numero + " por 8 es " + numero*8 + "</br>")
    document.write(numero + " por 9 es " + numero*9 + "</br>")
    document.write(numero + " por 10 es " + numero*10 + "</br>")
}