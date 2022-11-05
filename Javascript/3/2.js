function neperiano(){
	var numb = document.getElementById("numbe").value 
	var num = Math.log(numb)

	if(num <2){
		document.getElementById("numbe").style.color='red'
	}else{
		document.getElementById("numbe").style.color='green'
	}
}