const soma = (args) => {
    return args.reduce((acc, valorAtual) => acc + valorAtual)
}

console.log(soma([1, 2, 3, 4]))

const idades = [15, 19, 23, 18, 17, 20, 16]
const filtraIdade = (idades) => {
    return idades.filter(idade => idade >= 18)
}
idades = filtraIdade(idades)
console.log(idades)

const valores = [1, 2, 3, 4, 5]

/* const potencializa = (valores, expoente) => {
    return valores.map(valor => valor ** expoente)
}
 */
/* const valoresPotencia = potencializa(valores, 3) */

/* console.log(valoresPotencia) */