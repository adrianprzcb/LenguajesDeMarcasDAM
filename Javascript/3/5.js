

function enviar() { 
let puntuacion=0;

indice = document.getElementById("opciones").selectedIndex;
if( indice == 2 ) {
  puntuacion++
} else if(indice == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

indice2 = document.getElementById("opciones2").selectedIndex;
if( indice2 == 3 ) {
  puntuacion++
}else if(indice2 == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

indice3 = document.getElementById("opciones3").selectedIndex;
if( indice3 == 1 ) {
  puntuacion++
}else if(indice3 == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

indice4 = document.getElementById("opciones4").selectedIndex;
if( indice4 == 1 ) {
  puntuacion++
}else if(indice4 == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

indice5 = document.getElementById("opciones5").selectedIndex;
if( indice5 == 3 ) {
  puntuacion++
}else if(indice5 == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

indice6 = document.getElementById("opciones6").selectedIndex;
if( indice6 == 3 ) {
  puntuacion++
}else if(indice6 == 0){
	puntuacion = puntuacion
}else {
	puntuacion -=0.5
}

alert("Tu puntuacion es de " + puntuacion + "/6")
}

