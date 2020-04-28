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

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// 1
// 3
// 5
// 7
// 9

for (let i = 1; i <= 20; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// ...
// 20 x 20 = 400

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

// 50
// 40
// 30
// 20
// 10
// 0

// _______________________________________________________________________
