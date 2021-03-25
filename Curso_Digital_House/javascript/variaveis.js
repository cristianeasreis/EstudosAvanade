
const pessoa = { // 0x000084C7
    nome: "Cristiane",
    idade: 27,
    familiares: ["João", "Marcia", "Tony"],
    ativa: '0',
    habilitada: true,
    rg: "1234567898"
}


/* if (pessoa.idade >= 18 && pessoa.habilitada) {
    console.log("Pode dirigir")
}
else {
    console.log("não pode dirigir")
} */

/* switch (pessoa.idade) {
    case 25:
        console.log("Faça isso!")
        break
    case 27:
        console.log("Faça aquilo!")
        break
    default:
        console.log("Não faça nada!")
        break

} */

/* if(pessoa.rg || pessoa.passaporte) {
    console.log("Pode viajar")
}
else {
    console.log("Não pode não!")
}
 */

for(let i = 0; i < pessoa.familiares.length; i++) {
    console.log(`Boa tarde ${pessoa.familiares[i]}`)
}