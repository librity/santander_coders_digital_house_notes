// Default scope is global (var)
json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

const lerPets = umJSON => {
  const pets = JSON.parse(umJSON);
  for (let i = 0; i < pets.length; i++) {
    // console.log(pets[i].nome, pets[i].tipo);
  }

  return pets;
  //   console.log("fim da função")
};

// lerPets(json);

const vacinarPet = function(pet) {
  if (!pet.vacinado) {
    pet.vacinado = true;
    return "O Pet foi vacinado com sucesso!";
  } else {
    return "Esse pet já está vacinado!";
  }
};

const darEntradaPets = (listaPets, leituraLista, vacinarPet) => {
  let pets = leituraLista(listaPets);
  // console.log(pets)
  const msgFinal = (pet, resultado) => {
    console.log("O pet: " + pet.nome + resultado);
  };

  for (let i = 0; i < pets.length; i++) {
    let resultado = vacinarPet(pets[i]);
    msgFinal(pets[i], resultado);
  }
};

// Usar os dois callback para realizar os processos de leitura e vacina nos pets
//criar uma função para dar mensagem de finalização do serviço dentro da função principal

darEntradaPets(json, lerPets, vacinarPet);
