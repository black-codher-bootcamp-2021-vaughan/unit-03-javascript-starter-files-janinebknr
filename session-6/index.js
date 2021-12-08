// Use this randomNumber inside of the while/for loops to generate a random number
// const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************

let count = 0;

while (count < 10) {
  const randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber);
  count++;
}

// ****************************************************TASK 2****************************************************

for (let count2 = 0; count2 < 10; count2++) {
  const randomNumber2 = Math.round(Math.random() * 10);
  console.log(randomNumber2);
}
