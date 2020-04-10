a = [2, 3, 4, 8, 0];
console.log(a.filter(x => x > 5));

// .filter & .map
let firstResult = a.filter(x => x > 5).map(y => y ** 2);
let secondResult = a.map(y => y ** 2).filter(x => x > 5);
console.log(firstResult);
console.log(secondResult);

// .forEach w/ TemplateString
a.forEach(x => console.log(`number ${x}`));

// .reduce

/**
 * Given an array of city objects with a population key,
 * return the sum of all the populations of the cities that
 * have more that 5,000,000 inhabitants (.reduce & .filter)
 */

// spread /w arrays
a = [1, 4, 6, "sapo"];
b = [7, ...a, "galinha"];
console.log(b);

//spread w/ functions and .reduce
const roidedSum = (...x) => x.reduce((t, x) => t + x);
console.log(roidedSum(1, 2, 3));

// for..in
person = {
  name: "Luisito",
  age: "22",
  address: "Thomas Deloney Street, 77"
};

for (field in person) {
  console.log(`${field}: ${person[field]}`);
}

//for..of
let names = ["Luisito", "Rodrigues", "Mario", "Franku"];
for (name of names) {
  console.log(name);
}
