
let numero

for(numero = 1; numero<=60 ;numero+=4 ){


	if(numero%3==0 && numero%5==0){
		document.write("Múltiplo de 3 y de 5<br>")
	}
	else if(numero%3==0){
		document.write("Múltiplo de 3 <br>")
	}else if(numero%5==0){
		document.write("Múltiplo de 5 <br>")
	}else 

	document.write(numero + "<br>")
     
     
}

