function moda(){
	var vetorA = [];
	var vetorT = [];
	var objeto = {n : null , qtd : 0};
	var i;
	
	for(i=0;i<6;i++){
		vetorA[i] = parseInt(prompt("Informe o valor para o vetor A: "));
	}
	for(i=0;i<6;i++){
		var n = vetorA[i];
		var existe = false
		var qtdtestado = 0;
		
		for(var x=0;x<vetorT.length;x++){
			if(vetorT[x] == n){
				exite = true;
			}
		}
		if(!existe){
			for(var y=0;y<6;y++){
				if(n == vetorA[y]){
					qtdtestado++;
				}
			}
			if(qtdtestado > objeto.qtd){
				objeto.n = n;
				objeto.qtd = qtdtestado;
			}
			vetorT.push(n)
		}
	}
	alert('Moda: ' + objeto.n);
}