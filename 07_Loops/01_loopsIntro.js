// INTRO TO LOOPS

// Loops are concise methods for repeating code

// Multiple types:
// for loop
// while loop
// for...of loop
// for...in loop

// _______________________________________________________________________

// FOR LOOPS

// Pattern:

//  for (
//  [initialExpression],
//  [condition];
//  [incrementExpression]
//  )

for (let i = 1; i <= 10; i++) {
  console.log(`${i}. Hello!`);
}

// 1. Hello!
// 2. Hello!
// ...
// 10. Hello!

console.log("-----");

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// 1
// 3
// 5
// 7
// 9

console.log("-----");

for (let i = 1; i <= 20; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// ...
// 20 x 20 = 400

console.log("-----");

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

// 50
// 40
// 30
// 20
// 10
// 0

console.log("-----");

// _______________________________________________________________________

// INFINITE LOOPS

// Loops where the ending condition is never met.

// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// _______________________________________________________________________

// LOOPS AND ARRAYS

// Display elements of an array:

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

console.log("-----");

const examScores = [98, 77, 84, 60, 74, 92];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

console.log("-----");

const myStudents = [
  {
    firstName: "Zeus",
    grade: "98",
  },
  {
    firstName: "Artemis",
    grade: "77",
  },
  {
    firstName: "Hera",
    grade: "84",
  },
  {
    firstName: "Apollo",
    grade: "60",
  },
  {
    firstName: "Hercules",
    grade: "74",
  },
  {
    firstName: "Dionysus",
    grade: "92",
  },
];

let avgScore = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];

  console.log(`${student.firstName} scored a ${student.grade}`);
  avgScore += student.grade / myStudents.length;
}

console.log(`Average score: ${Math.round(avgScore)}`);

// Zeus scored a 98
// Artemis scored a 77
// Hera scored a 84
// Apollo scored a 60
// Hercules scored a 74
// Dionysus scored a 92
// Average score: 81

console.log("-----");

const word = "stressed";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord);

// desserts

console.log("-----");
