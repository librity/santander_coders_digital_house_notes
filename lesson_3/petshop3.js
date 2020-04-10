json = `[
  {
    "nome": "Repete Pet",
    "raca": "Passsaro",
    "dataNascimento": "2018-12-10T12:59:23Z",
    "tipo": "Papagaio",
    "peso": 3.5,
    "sexo": "Macho",
    "dono": {
      "nome": "vinicius",
      "idade": 25
    },
    "vacinado": false,
    "castrado": true,
    "servicos": [
      "Banho",
      "Tosa"
    ]
  },
  {
    "nome": "Menino",
    "raca": "Vira-Lata",
    "dataNascimento": "2016-01-14T16:30:22Z",
    "tipo": "cachorro",
    "sexo": "Fêmea",
    "peso": 3.5,
    "dono": {
      "nome": "João",
      "idade": 25
    },
    "vacinado": true,
    "castrado": false,
    "servicos": [
      "Banho",
      "Tosa"
    ]
  }
]`;

// JSON data standard: AAAA-MM-DDTHH:mm:SSZ
// The Z is the time zone (Z = GMT)
// other time zones AAAA-MM-DDTHH:mm:SS-3:00 Brazilia
// https://en.wikipedia.org/wiki/ISO_8601

const PETSHOP_NAME = "Petshop Inc.";
const SEPARATOR = "-".repeat(30);
const DIVISOR = `\n${SEPARATOR}\n`;

const initializeCLI = () => {
  printHeader();

  doActions(json, logNewArrivals, [vaccinatePets, castratePets, bathePets]);

  printFooter();
};

const printHeader = () => {
  console.log(`\n ***** ${PETSHOP_NAME} ***** \n`);
};

const printFooter = () => {
  console.log("\n ***** FIM ***** \n");
};

const doActions = (data, initialize, actions) => {
  pets = initialize(data);

  actions.forEach(action => action(pets));

  findByName("Me", pets);

  checkOut(pets);
};

const sortThrough = (items, action) => {
  for (item of items) {
    action(item);
  }
};

const logNewArrivals = data => {
  const pets = JSON.parse(data);

  pets.map(pet => (pet.dataNascimento = new Date(pet.dataNascimento)));
  // console.log(pets);

  const prinNewArrival = pet => {
    let log = `${pet.nome}, ${pet.tipo}`;

    console.log(log);
  };

  sortThrough(pets, prinNewArrival);

  console.log(DIVISOR);

  return pets;
};

const vaccinatePets = pets => {
  sortThrough(pets, triesToVaccinate);

  console.log(DIVISOR);
};

const triesToVaccinate = pet => {
  try {
    if (pet.vacinado) throw `O ${pet.nome} já foi vacinado!`;

    vaccinate(pet);
  } catch (err) {
    console.log(err);
    return;
  }
};

const vaccinate = pet => {
  pet.vacinado = true;

  console.log(`O ${pet.nome} foi vacinado!`);

  pet.servicos.push("Vacina");
};

const castratePets = pets => {
  sortThrough(pets, triesToCastrate);

  console.log(DIVISOR);
};

const triesToCastrate = pet => {
  try {
    if (pet.castrado) throw `O ${pet.nome} já foi castrado!`;

    castrate(pet);
  } catch (err) {
    console.log(err);
    return;
  }
};

const castrate = pet => {
  pet.castrado = true;

  console.log(`O ${pet.nome} foi castrado!`);

  pet.servicos.push("Catração");
};

const bathePets = pets => {
  sortThrough(pets, givesBath);

  console.log(DIVISOR);
};

const givesBath = pet => {
  pet.servicos.push("Banho");

  console.log(`O ${pet.nome} foi banhado!`);
};

const findByName = (querry, pets) => {
  let filteredPets = pets.filter(pet => pet.nome.includes(querry));

  console.log(filteredPets);
  console.log(DIVISOR);

  return filteredPets;
};

const checkOut = pets => {
  sortThrough(pets, printCheckout);
};

const printCheckout = pet => {
  const { servicos } = pet;

  let log = `Fizemos ${servicos.join(", ")} no ${pet.nome}`;

  console.log(log);
};

initializeCLI();
