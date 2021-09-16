var nota1 = document.getElementById('number-input1');
var nota2 = document.getElementById('number-input2');
var nota3 = document.getElementById('number-input3');
var nota4 = document.getElementById('number-input4');
var media;
var writeValue = document.getElementById('resultado');

function calcularNotas(){

	media = (parseFloat(nota1.value)+ parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value))/4;

	if((media > 10)||(Number.isNaN(parseFloat(nota1.value)))||(Number.isNaN(parseFloat(nota2.value)))||(Number.isNaN(parseFloat(nota3.value)))||(Number.isNaN(parseFloat(nota4.value)))){
		writeValue.innerText = "Esta média é invalida";
	}
	else if(media >= 5){
		writeValue.innerText = "A média é " + media + " e Você esta aprovado";
	}
	else{
		writeValue.innerText = "A média é " + media + " e Você esta reprovado";
	}
}
