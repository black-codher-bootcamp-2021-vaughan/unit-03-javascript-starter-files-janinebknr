// ****************************************************TASK 1 - OBJECTS****************************************************
let personA = {
  name: "Shan",
  age: 25,
  location: "Birmingham",
  likes: "singing",
};

let personB = {
  name: "Dom",
  age: 33,
  location: "London",
  likes: "cooking",
};

let personC = {
  name: "Ri",
  age: 26,
  location: "Birmingham",
  likes: "playing in makeup",
};

let personD = {
  name: "Dani",
  age: 30,
  location: "Walsall",
  likes: "watching movies",
};

function biography(person) {
  return (
    "Hi, my name is " +
    person.name +
    ". I am " +
    person.age +
    " years old, I live in " +
    person.location +
    " and I like " +
    person.likes
  );
}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x / y;

console.log("Division: x / y " + division);

console.log(x * x);
console.log(x + x + y);
console.log((x * y) / x);
console.log(3 * x + y);
console.log(x / x + y);

// ****************************************************TASK 3****************************************************

const myAge = 36;
const drivingAge = 17;
const oldEnough = myAge >= drivingAge;
console.log("Am I old enough to drive? " + oldEnough);
