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

// ****************************************************HOMEWORK****************************************************

function calculator(num1, num2) {
  const calcAddition = num1 + num2;
  const calcSubtraction = num1 - num2;
  const calcMultiplication = num1 * num2;
  const calcDivision = num1 / num2;
  return (
    "Addition: " +
    calcAddition +
    ", Subtraction: " +
    calcSubtraction +
    ", Multiplication: " +
    calcMultiplication +
    ", Division: " +
    calcDivision
  );
}

console.log(calculator(3, 4));

function whoIsOlder(firstPerson, secondPerson) {
  if (firstPerson.age > secondPerson.age) {
    const ageGap = firstPerson.age - secondPerson.age;
    return (
      firstPerson.name +
      " is " +
      ageGap +
      " years older than " +
      secondPerson.name
    );
    // } else if (firstPerson.age === secondPerson.age) {
    //   return (
    //     secondPerson.name + " and " + firstPerson.name + " are the same age."
    //   );
  } else {
    const ageGap = secondPerson.age - firstPerson.age;
    return (
      secondPerson.name +
      " is " +
      ageGap +
      " years older than " +
      firstPerson.name
    );
  }
  // const isFirstPersonOlder = firstPerson.age > secondPerson.age;
  // const ageGap = firstPerson.age - secondPerson.age;
  // console.log(
  //   "Is " +
  //     firstPerson.name +
  //     " older than " +
  //     secondPerson.name +
  //     "? " +
  //     isFirstPersonOlder
  // );
  // console.log(
  //   "The age difference between " +
  //     firstPerson.name +
  //     " and " +
  //     secondPerson.name +
  //     " is " +
  //     ageGap +
  //     " years."
  // );
}

console.log(whoIsOlder(personB, personC));
