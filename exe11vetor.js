function exev11(){
	var np = 0;
	var vetor = [];
	var ni = 0;
	var vetor2 = []; 
	var vetor3 = [];
	var x = 0;
	var y = 0;
	
	for(i=0;i<10;i++){
		vetor[i] = parseInt(prompt("Informe os numeros : " + i));
		if(vetor[i] % 2 == 0){
		vetor3[x] = vetor[i];
		x++;
		}else{
			vetor2[y] = vetor[i];
			y++;
		}
	}

alert("Numeros pares " + vetor3);
alert("Numeros impares " + vetor2);
}