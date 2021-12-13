// // ****************************************************TASK 1****************************************************
const animals = ["cat", "dog", "wolf", "lion", "eagle", "zebra"];
animals.pop();
console.log(animals);

// // ****************************************************TASK 2****************************************************
const names = [
  "Hayley",
  "Sara",
  "Seth",
  "Dawn",
  "Geoffrey",
  "Alex",
  "Janine",
  "Shan",
  "Dominique",
  "Zara",
];

// Sort names in ascending order
names.sort();
console.log(names);

// Sort names in descending order
names.sort().reverse();
console.log(names);

const numArray = [5, 325, 67, 100000, 150];
console.log(numArray);

// Sort numbers in ascending order
numArray.sort(function (a, b) {
  return a - b;
});
console.log(numArray);

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: "shuri", age: 16 },
  { name: "killmonger", age: 32 },
];
// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}

// Sort names in ascending age order
people.sort(compare);

// Create new empty array peopleByAge
let peopleByAge = [];

// Create a FOR loop to push only the sorted names to the new array peopleByAge
for (let index = 0; index < people.length; index++) {
  peopleByAge.push(people[index].name);
}

console.log(peopleByAge);
