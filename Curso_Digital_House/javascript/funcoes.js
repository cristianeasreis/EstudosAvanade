function soma(args) {
    let result = 0
    for(let i = 0; i < args.length; i++) {
        result += args[i]
    }

    return result
}

function subtracao(a, b) {
    return a - b
}

const multiplicacao = (a, b) => {
    return a * b
}

function main() {
    const resSoma = soma([5, 8, 16, 22])
    const resSub = subtracao(5, 2)
    const resMult = multiplicacao(3, 5)
    console.log(resSoma, resSub, resMult)
}

/* main()


const mesas = [
    {
        numero: 1,
        pessoas: 3,
        valorConta: 150.00
    },
    {
        numero: 2,
        pessoas: 2,
        valorConta: 80.00
    }
]

const valorTotal = mesas.reduce((mesasTotal, mesaAtual) => mesasTotal + mesaAtual.valorConta, 0)
console.log(valorTotal)
 */




const alunos = [
    {
        nome: 'Julia',
        p1: 6.5,
        p2: 8.0,
        p3: 7.3
    },
    {
        nome: 'Priscila',
        p1: 6.0,
        p2: 7.0,
        p3: 5.3
    }
]

const statusAprovacao = alunos.map(aluno => {
    const resultado = (aluno.p1 + aluno.p2 + aluno.p3) /3
    return resultado >= 7 ? 'aprovado' : 'reprovado'
})

console.log(statusAprovacao)