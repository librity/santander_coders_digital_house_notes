const NOME_PETSHOP = "** PETSHOP DO VINÃO **";

console.log(NOME_PETSHOP);
const M = "Macho";
const F = "Fêmea";
// var nome = "Bob";
// var raca = "Vira-lata";
// var idade = 4
// var peso = 3.5
// var dono = {nome:"Vinicius",idade:25}
// var vacinado = false
// // var servicos = ["Banho", "Tosa",{
// //     nome:"vacina",
// //     feito:true
// // }]
// var servicos = ["Banho", "Tosa"];

let pets = [
  {
    nome: "Repete Pet",
    raca: "Passsaro",
    dataNascimento: "10/12/2018",
    tipo: "Papagaio",
    peso: 3.5,
    sexo: "Macho",
    dono: { nome: "vinicius", idade: 25 },
    vacinado: false,
    servicos: ["Banho", "Tosa"]
  },
  {
    nome: "Menino",
    raca: "Vira-Lata",
    dataNascimento: "14/01/2016",
    tipo: "cachorro",
    sexo: "Fêmea",
    peso: 3.5,
    dono: { nome: "João", idade: 25 },
    vacinado: true,
    servicos: ["Banho", "Tosa"]
  }
];

// console.log(pets[1])

function listarPets() {
  let i = 0;
  while (i < pets.length) {
    console.log("-".repeat(10));
    console.log("Nome: " + pets[i].nome);
    console.log("Tipo: " + pets[i].tipo);
    //  if(pets[i].sexo == "F"){
    //     console.log("Sexo: Fêmea");
    //  }else{
    //     console.log("Sexo: Macho");
    //  }
    //console.log(pets[i].sexo == "F"? "Sexo: Fêmea" : "Sexo: Macho");
    console.log("Sexo: " + pets[i].sexo);
    i++;
  }
}

listarPets();

// let contador = 0;
// while(contador < 10){
//      console.log("Oi");
//      contador++;
// }

const vacinarPet = function(pet) {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log("O Pet foi vacinado com sucesso!");
  } else {
    console.log("Esse pet já está vacinado!");
  }
};

vacinarPet(pets[0]);
