let confirma = confirm("¿Quieres cambiar la contraseña?")

if(confirma == false){
	window.close();
}

function verificar() {
          var contr1 = document.querySelector("#contrasena").value;
          if (contr1.length < 8) {
              document.getElementById("l").style.Color='red'
	  }
	  else {
	       alert("Bien");
	  }
     }