var dni= parseInt(prompt("Introduce tu DNI sin letra"))
var letra= prompt("Introduce la letra de tu DNI (En mayúscula)")
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


if(dni<0 || dni>99999999){
    alert("DNI no valido")
}else{

    var letraVerifica = letras[dni % 23]
    if(letraVerifica != letra) {
        alert("La letra o el número de DNI no son correctos");
      }
      else {
        alert("Todo está correcto");
      }
}