let marcasDeAutos = ["Mustang", "Ferrari", "Ford", "Chevrolet"];
for (marcasDeAuto of marcasDeAutos) {
  if (marcasDeAuto === "Ford") {
    console.log(marcasDeAuto);
  }
}

let marcasDeAutos = ["Mustang", "Ferrari", "Ford", "Chevrolet"];
console.log(marcasDeAutos[2]);
for (let i = 0; i < marcasDeAutos.length; i++) {
  if (marcasDeAutos[i] === "Ford") {
    console.log(marcasDeAutos[i]);
  }
}

let alunos = ["João", "Pedro", "Jorge", "Francisco"];
let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

let arrayFrase = [
  "Não",
  "fracassei,",
  "simplesmente",
  "encontrei",
  "dez",
  "mil",
  "soluções",
  "equivocadas"
];
let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);

let estudantes = [
  {
    nome: "Álvaro",
    media: 9,
    curso: "Android"
  },
  {
    nome: "Daniel",
    media: 6,
    curso: "Full Stack"
  },
  {
    nome: "Alexis",
    media: 3,
    curso: "iOS"
  }
];
let alunoFormado = estudantes.pop(2);

let estudantes = [
  {
    nome: "Álvaro",
    media: 9,
    curso: "Android"
  },
  {
    nome: "Daniel",
    media: 6,
    curso: "Full Stack"
  }
];
estudantes.push({
  nome: "João",
  media: 5,
  curso: "iOS"
});
estudantes.push({
  nome: "Miguel",
  media: 2,
  curso: "Android"
});

let estudantes = [
  {
    nome: "Álvaro",
    media: 9,
    curso: "Android"
  },
  {
    nome: "Daniel",
    media: 6,
    curso: "Full Stack"
  },
  {
    nome: "Alexis",
    media: 3,
    curso: "iOS"
  }
];
let alunoDesistente = estudantes.shift(1);

let estudantes = [
  {
    nome: "Alvaro",
    media: 9,
    curso: "Android"
  },
  {
    nome: "Daniel",
    media: 6,
    curso: "Full Stack"
  },
  {
    nome: "Alexis",
    media: 3,
    curso: "iOS"
  }
];
estudantes.unshift({
  nome: "Mariana",
  media: 9,
  curso: "Full Stack"
});
estudantes.unshift({
  nome: "Francisco",
  media: 2,
  curso: "Android"
});

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(element => element > 18);

let bart = {
  mae: "Marge",
  pai: "Homer",
  hobbie: "Skate",
  corCamiseta: "Laranja"
};
for (trait in bart) {
  console.log(bart[trait]);
}

let frase = "Essa semana vou no colearning";
for (letter of frase) {
  console.log(letter);
}

let data = new Date();
data.setYear(1999);
data.setMonth(12);
data.setDate(31);

let destinosIncriveis = [
  "Marruecos",
  "Bariloche",
  "Barcelona",
  "China",
  "Grecia"
];
let [marruecos, bariloche, barcelona, china, grecia] = destinosIncriveis;
