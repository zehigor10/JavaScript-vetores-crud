function exev2(){
	var mltp2;
	var mltp3;
	var mltp2e3;
	var vetor = [];
	
	for(var i=1;i<=8;i++){
		vetor[i] = parseInt(prompt("Informe os numeros " + i));
		if(vetor[i] % 2 == 0){
			alert("O número " + i + " é Divisivel por 2 ");
		}
		if(vetor[i] % 3 == 0){
			alert("O número " + i + " é Divisivel por 3");
		}
		if((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
			alert("O número " + i + " é Divisivel por 2 e 3");
		}
	}
}