const pessoa = {
  nome: "Cristiane",
  idade: 35,
  hobis: ["ler", "jogar", "musica"],
  ativa: '0',
  habilitada : true

  }
if (pessoa.idade <= 18 && pessoa.habilitada){
    console.log("pode dirigir")
}
else{
    console.log("não pode dirigir")
}

console.log(pessoa)
