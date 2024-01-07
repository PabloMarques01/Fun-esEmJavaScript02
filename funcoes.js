/*
    Função: Trecho de código que só é executado quando ele é chamado/invocado.

        Função Void (vazia)
        Função com Parâmetro(s)
        Função Return
        Função Arrow

*/

//Função Void

let valor = 20

function incrementa() {
    valor = 20 + 30
}

incrementa()
console.log(valor)

//Função com parâmetro

function mostraNome(nome){
    console.log(nome)
}

mostraNome("Paulo")
mostraNome("Já deste like?")

function soma (n1, n2) {
    const somaDosNumeros = n1 + n2

    console.log(somaDosNumeros)
}

soma(10,5)

//Função Return

function  subtração (n1, n2) {
    const subtraçãoDosNumeros = n1 - n2
    return subtraçãoDosNumeros
}

const meusNúmeros = subtração(10,6)

console.log(meusNúmeros)

//Função Arrow

const multi = (n1, n2) => {
    const multiplicação = n1 * n2
    return multiplicação
}

const multiplicacao = multi(2,5)
console.log(multiplicacao)

const divisão = (n1,n2) => n1 / n2 

const divisao = divisão(10,2)

console.log(divisao)