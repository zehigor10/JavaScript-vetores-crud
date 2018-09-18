function carro(a, b, c, d, e, f){
	this.ano = a;
	this.cor = b;
	this.marca = c; 
	this.motor = d;
	this.modelo = e; 
	this.combustivel = f;
}
function f1(vetor1){
	var i = parseInt(prompt("Informe o ano do carro: "));
	var s = prompt("Informe a cor do carro: ");
	var sa = prompt("Informe a marca do carro: ");
	var f = parseFloat(prompt("Informe filhos"));
	vetor1.push(new carro(i, s, sa, f));
}
function f2(vetor2){
	var soma =0; var media;
	for(var i=0; i< vetor2.length; i++){
		soma = soma + vetor2[i].salario;
	}
	media = soma / vetor2.length;
	alert("A média é " + media);
}
function f3(vetor3){
	var maior, menor;
	maior = vetor3[0].idade; menor = vetor3[0].idade; 
	for(var i=0;i<vetor3.length;i++){
		if (vetor3[i].idade > maior){
			maior = vetor3[i].idade;
		}
		if (vetor3[i].idade < menor){
			menor = vetor3[i].idade;
		}
	}
	alert("Maior idade " + maior + " e menor idade " + menor);
}

function f4(vetor4){
		var qtde = 0;
	for(var i=0;i<vetor4.length;i++){
		if ((vetor4[i].sexo == "F") && (vetor4[i].filhos == 3) && (vetor4[i].salario <= 500)){
			qtde++;
		}
	}
	alert(qtde);
}