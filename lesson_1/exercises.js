let dia = 'segunda-feira'

function fimDeSemana(dia) {
    switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
        case 'segunda-feira':
            console.log('Boa semana!')
            break;
        default:
            console.log('Bom dia!')
    }
}

let dia = "sabado";

function fimDeSemana(dia) {
    switch (dia) {
        case "segunda-feira":
            console.log("você tem aulas!")
            break;
        case "quarta-feira":
            console.log("você tem aulas!")
            break;
        case "sexta-feira":
            console.log("você tem aulas!")
            break;
        default:
            console.log("você não tem aulas")
    }
}

fimDeSemana(dia)

const papagaio = (string) => {
    for (let i = 0; i < 5; i++) {
        console.log(string)
    }
}

function naoPareDeContarImparesAte(numero) {
    let oddNumbersCounter = 0;
    for (let i = 0; i < numero; i++) {
        console.log(i)
        if (i % 2 != 0) {
            oddNumbersCounter++
        }
    }
    return oddNumbersCounter
}

function exemplo() {
    let welcome = 'Olá, sou uma função'
    return welcome;
}


let exemplo = function () {
    let welcome = "Oi, eu sou uma função expressa"
    return welcome;
}

function saudar(nome, sobrenome) {
    return 'olá, ' + nome + ' ' + sobrenome + '!';
}

function ePar(number) {
    return number % 2 == 0;
}

function anterior(number) {
    return --number;
}

function triplo(number) {
    return number * 3;
}

function anteriorDoTriplo(number) {
    return anterior(triplo(number));
}

let data = true
if (data == true) {
    console.log("é true")
} else {
    console.log("é falso")
}

let linguagem = "javascript"
if (linguagem === "javascript") {
    console.log("Estou aprendendo")
} else {
    console.log("Vou aprender mais pra frente")
}

function podePassar(name) {
    if (name === "Natalia") {
        return false
    }

    return true
}

function count(inicio, fim) {
    let aux = inicio
    while (aux < fim) {
        console.log('O número atual é ' + aux + ' e é menor que ' + fim)
        aux++
    }
}
function count(inicio, fim) {
    while (inicio < fim) {
        console.log('O número atual é ' + aux + ' e é menor que ' + fim)
        inicio++
    }
}
count(4, 6)

function encontreUm5(numeros) {
    var i = 0
    do {
        if (numeros[i] === 5) {
            console.log("Encontrei um 5!")
            break;
        }
        i++
    }
    while (i < numeros.length)
}

function tabelaDeMultiplicacao(numero) {
    let i = 1
    while (i < 11) {
        console.log(numero + ' * ' + i + ' = ' + (numero * i))
        i += 1
    }
}
tabelaDeMultiplicacao(5)