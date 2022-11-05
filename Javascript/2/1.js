
let anos = parseInt(prompt("Introduce el número de años de carnet:"))
let edad = parseInt(prompt("Introduce tu edad"))
let compra = parseInt(prompt("Precio Total de la compra"))
let preciofinal 

function descuento(){

        if(anos>6){
                 preciofinal = compra - compra * 0.20
        }if(anos<=6 && anos>3){
            preciofinal = compra - compra * 0.15
        }
        else{
             preciofinal = compra - compra * 0.10
        }
        
        if(edad>30){
             preciofinal = preciofinal - preciofinal * 0.05
        }
        return preciofinal
}

document.write(descuento())