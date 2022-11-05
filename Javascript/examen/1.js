	let confirma = confirm("Este sitio web utiliza cookies, si permanece aquí acepta su uso")
			if(confirma == false){
			window.close();
			}



	function media(){
			let num1 = document.getElementById("num1").value
			let num2 = document.getElementById("num2").value
			
			if (num1==0) {
				alert("¡Introduce el primer número!")
				document.getElementById("num1").style.backgroundColor='Yellow'
			}
			if (num2==0) {
				alert("¡Introduce el segundo número!")
				document.getElementById("num2").style.backgroundColor='Yellow'
			}
			
			let redondear = document.getElementById("redondear").checked
			numero1 = parseInt(num1)
			numero2 = parseInt(num2)
			if(redondear==true){
							
			resultado= numero1+numero2 
			resultado2= resultado/2
			resultado3 = resultado2.toFixed(2)
			alert(resultado3)
			} else{
				resultado= numero1+numero2	
				resultado2= resultado/2
				alert(resultado2)
			}
			}



function mcd() { 

			let num1 = document.getElementById("num1").value
			let num2 = document.getElementById("num2").value
			firstNum = parseInt(num1)
			secondNum = parseInt(num2)

   
    if (firstNum < 0){
        firstNum = -firstNum
    }

    if (secondNum < 0){
        secondNum = -secondNum
    }

   
    if (Number.isInteger(firstNum) && Number.isInteger(secondNum) && !(firstNum===0 && secondNum===0)){

       
        if (!secondNum) {  
            return firstNum 
        }  
      
        let resultado=  mcd(secondNum, firstNum % secondNum)
        alert(resultado)
    }}

 		function color(){
 			let fondo= document.getElementById("formu").style.backgroundColor
 			if(fondo==""){
 			 document.getElementById("formu").style.backgroundColor='green'
 			}
 			 else if(fondo=='green'){
 			 	document.getElementById("formu").style.backgroundColor='pink'
 			}
 		    else if( fondo=='pink'){
 			document.getElementById("formu").style.backgroundColor='blue'
 			}
 			 else if(fondo=='blue'){
 			document.getElementById("formu").style.backgroundColor='green'

 		}

 		}


	