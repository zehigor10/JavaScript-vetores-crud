function Produto(a, b, c, d){
	this.codigo = a;
	this.nome = b;
	this.qtde = c; 
	this.valor = d;
}
function insere(vetor1){
	// alteração e consulta em vetor1 é na verdade em vetor
	var c = parseInt(prompt("Informe código"));
	var n = prompt("Informe nome");
	var q = parseInt(prompt("Informe qtde"));
	var v = parseFloat(prompt("Informe valor"));
	vetor1.push(new Produto(c, n, q, v));
}
function consulta(vetor2){
	// alteração e consulta em vetor1 é na verdade em vetor
	for(var i=0; i< vetor2.length; i++){
		alert("Código " + vetor2[i].codigo + 
			" Nome " + vetor2[i].nome + 
			" Qtde: " + vetor2[i].qtde +
			" Valor: " + vetor2[i].valor);
	}

}
function remove(vetor3){
	var achou = false;
	// alteração e consulta em vetor1 é na verdade em vetor
	var cod = parseInt(prompt("Informe código para remover"));
	for(var i=0;i<vetor3.length;i++){
		if (cod == vetor3[i].codigo){
			vetor3.splice(i, 1);
			achou = true;
		}
	}
	if (achou == false)
		alert("Produto não existe");
}

function atualiza(vetor4){
	// alteração e consulta em vetor1 é na verdade em vetor
	var achou = false;
	// alteração e consulta em vetor1 é na verdade em vetor
	var cod = parseInt(prompt("Informe código para atualizar"));
	for(var i=0;i<vetor4.length;i++){
		if (cod == vetor4[i].codigo){
			vetor4[i].nome = prompt("Informe novo nome");
			vetor4[i].qtde = parseInt(prompt("Informe nova qtde"));
			vetor4[i].valor = parseFloat(prompt("Informe novo valor"));
			achou = true;
		}
	}
	if (achou == false)
		alert("Produto não existe");

}
