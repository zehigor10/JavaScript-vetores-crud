function exev7(){
	var nn;
	var vetor = [];
	var soma = 0;
	var quant = 0; 
	
	for(i=0;i<10;i++){
		vetor[i] = parseInt(prompt("Informe os numeros : " + i));
		if(vetor[i] < 0){
		quant++;
		}
			if(vetor[i] > 0){
			soma += vetor[i]
			}
	}
console.log(vetor)
alert("Quantidade de numeros negativos é " + quant);
alert("Soma dos numeros positivos é " + soma);
}