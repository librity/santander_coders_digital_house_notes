const PETSHOP_NAME = "Petshop Inc."
const DIVISOR = '-'.repeat(10)
console.log(`\n ***** ${PETSHOP_NAME} ***** \n`)

/**
 * var nome = 'Burkie'
 * var idade = 5
 * var raca = 'Westie'
 * var dono = {
 *     nome: 'Mike',
 *     idade: 60,
 *     endereco: {
 *         rua: 'William Way',
 *         numero: 611,
 *         cidade: 'Sidney',
 *         estado: 'NE',
 *         pais: 'USA'
 *     },
 *     profissao: 'full-time hippie'
 * }
 * var vacinado = true
 * var servicos = [
 *     { nome: 'Corte de unhas', feito: true },
 *     { nome: 'Corte de cabelo', feito: true },
 *     { nome: 'Banho', feito: false },
 *     { nome: 'Secador', feito: false }
 * ]
 * var peso = 5.5
 */

var pets = [
    {
        nome: "Fluffy",
        especie: 'cachorro',
        dataNacimento: '03/12/2014',
        raca: 'Doberbamnn',
        dono: {
            nome: 'Lori',
            idade: 22,
            endereco: {
                rua: 'Old tow road',
                numero: 14,
                cidade: 'Portland',
                estado: 'OR',
                pais: 'USA'
            },
            profissao: 'lawyer'
        },
        sexo: 'F',
        vacinado: false,
        servicos: [
            { nome: 'Corte de unhas', feito: false },
            { nome: 'Corte de cabelo', feito: false },
            { nome: 'Banho', feito: false },
            { nome: 'Secador', feito: false }
        ],
        peso: 40.9
    },
    {
        nome: "Burkie",
        especie: 'cachorro',
        dataNacimento: '23/09/2010',
        raca: 'Westie',
        dono: {
            nome: 'Mike',
            idade: 60,
            endereco: {
                rua: 'William Way',
                numero: 611,
                cidade: 'Sidney',
                estado: 'NE',
                pais: 'USA'
            },
            profissao: 'full-time hippie'
        },
        sexo: 'M',
        vacinado: true,
        servicos: [
            { nome: 'Corte de unhas', feito: true },
            { nome: 'Corte de cabelo', feito: true },
            { nome: 'Banho', feito: false },
            { nome: 'Secador', feito: false }
        ],
        peso: 5.5
    }
]

// console.log(pets)

const listPets = () => {
    // let index = 0
    // while (pets[index] !== undefined) {
    //     console.log(DIVISOR)
    //     console.log(`Nome: ${pets[index].nome}, Raça: ${pets[index].raca}`)
    //     pets[index].sexo === 'M' ?
    //         console.log(`O ${pets[index].especie} é macho.`) :
    //         console.log(`O ${pets[index].especie} é femêa.`)
    //     index++
    // }

    for (pet of pets) {
        console.log(DIVISOR)
        console.log(`Nome: ${pet.nome}, Raça: ${pet.raca}`)
        pet.sexo === 'M' ?
            console.log(`O ${pet.especie} é macho.`) :
            console.log(`O ${pet.especie} é femêa.`)
    }
    console.log(DIVISOR)
}

const vaccinatePet = (pet) => {
    try {
        if (pet.vacinado) throw `O ${pet.nome} já foi vacinado!`
        pet.vacinado = true
    } catch (err) {
        console.log(err)
        return
    }
    console.log(`O ${pet.nome} foi vacinado!`)
}

listPets()
vaccinatePet(pets[0])
vaccinatePet(pets[1])

console.log(`\n ***** FIM ***** \n`)
