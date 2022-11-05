/* var mi;
mi = 8;
 if (mi < 5) {
 	alert("Hola!")
 } else {
 	alert("Adios!")
 }
 */

 let numero  = parseInt(prompt("Introduce un número"))
 let numero2 = parseInt(prompt("Introduce otro número"))
 let resultado = parseInt(numero + numero2)
 alert("La suma de "+numero+" y " + numero2+ " es " +resultado+".")
 if (resultado>10 && resultado<30) {
	 document.write("Tu cálculo está entre 10 y 30</br> Sigue así!")
 } else {
	 document.write("Tu cálculo no está entre 10 y 30 </br> Qué mal! </br> <ul><li>Te lo repito?</li><li>Espero que no haga falta</li></ul>")
 }
