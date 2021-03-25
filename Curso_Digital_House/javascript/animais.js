const animais = [
    {
        nome:"leão",
        especie:"leao",
        sexo:"m",
        doente: true
    },
    {
        nome:"onça",
        especie:"onça",
        sexo:"f",
        doente: false
    },
    {
        nome:"mamaco",
        especie:"mamaco",
        sexo:"m",
        doente: false
    },
    {
        nome:"tigre",
        especie:"tigre",
        sexo:"f",
        doente: true
    },
]
const filtraDoentes = (animal) => ! animal.doente
const animaisExposicao = animais.filter((animais) => !(animais.doente))

console.log(animaisExposicao)
console.log((filtraDoentes(animais[0])))

