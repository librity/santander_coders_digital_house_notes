const outputContainer = document.getElementById('output');
const petsContainer = document.getElementById('pets');

const handleVaccinations = () => {
  outputContainer.innerHTML = '';

  const vaccinated = pets.filter((pet) => pet.vacinado).length;
  const unvaccinated = pets.filter((pet) => !pet.vacinado).length;

  outputContainer.innerHTML += `
  <dl class="vaccination">
    <dt>Total Vaccinated</dt>
    <dd>${vaccinated}</dd>
    <dt>Total Unvaccinated</dt>
    <dd>${unvaccinated}</dd>
  </dl>
  `;
};

const handleUpdatePets = () => {
  petsContainer.innerHTML = '';

  pets.length === 0 ? renderEmptyPetsMessage() : renderPets();
};

const renderEmptyPetsMessage = () => {
  petsContainer.innerHTML = 'No pets found!';
};

const renderPets = () => {
  pets.forEach((pet) => {
    petsContainer.innerHTML += `
    <dl class="pet">
      <dt>Name</dt>
      <dd>${pet.nome}</dd>
      <dt>Species</dt>
      <dd>${pet.tipo}</dd>
      <dt>Race</dt>
      <dd>${pet.raca}</dd>
      <dt>Age</dt>
      <dd>${pet.idade}</dd>
      <dt>Sex</dt>
      <dd>${pet.genero}</dd>
      <dt>Vaccinated</dt>
      <dd>${pet.vacinado}</dd>
      <dt>Services</dt>
      <dd>${pet.servicos.join(', ')}</dd>
    </dl>
    `;
  });
};

const handleAddPet = () => {};
