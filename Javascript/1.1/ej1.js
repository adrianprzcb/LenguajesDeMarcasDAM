
let numero = parseInt(prompt("Introduzca un número"))

if(numero % 2 == 0){
    document.write("Número par </br>")
}else{
    document.write("Número Impar </br>")
}

let i=0
primo=true
for (i=2; i<numero; i++){
    if(numero%i==0){
        primo=false;
    }
}

if(primo==true){
    document.write("El número es primo")
}else{
    document.write("El número no es primo")
}