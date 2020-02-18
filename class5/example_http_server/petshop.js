let petList = ["bob", "dino"];

const listPets = () => {
  let content = "";

  petList.forEach((pet, index) => {
    content += `Pet's name: ${pet}\n`;
  });

  return content;
};

const addPet = petName => {
  petList.push(petName);

  return true;
};

module.exports = { listPets, addPet };
