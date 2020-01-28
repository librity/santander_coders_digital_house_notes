let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

const PETSHOP_NAME = "Petshop Inc.";
const SEPARATOR = "-".repeat(30);
const DIVISOR = `\n${SEPARATOR}\n`;

const initializeCLI = () => {
  printHeader();

  handleNewArrivals(json, logNewArrivals, vaccinatePets);

  printFooter();
};

const printHeader = () => {
  console.log(`\n ***** ${PETSHOP_NAME} ***** \n`);
};

const printFooter = () => {
  console.log("\n ***** FIM ***** \n");
};

const handleNewArrivals = (data, initialize, action) => {
  pets = initialize(data);

  action(pets);

  checkOut(pets);
};

const sortThrough = (items, action) => {
  for (item of items) {
    action(item);
  }
};

const logNewArrivals = data => {
  const pets = JSON.parse(data);

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
  }
};

const vaccinate = pet => {
  pet.vacinado = true;

  console.log(`O ${pet.nome} foi vacinado!`);

  pet.servicos.push("Vacina");
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
