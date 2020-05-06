// Arguments Object

// Available inside every function. It's an array-like object - has a length property - does NOT have array methods like push/pop, etc.

// Contains all the arguments passed to the function. Not available inside of arrow functions.

function sum() {
  console.log(arguments);
}

sum(1, 2, 3);

// [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1
// 1: 2
// 2: 3
// 0: 1
// 1: 2
// 2: 3

function sumNums() {
  return arguments.reduce((accum, currentVal) => {
    return accum + currentVal;
  });
}

// sumNums(1, 2, 3, 4, 5);
// Uncaught TypeError: arguments.reduce is not a function

// Since arguments is NOT an array but an array-like object, we can't call methods like reduce on it.

function sumNums2() {
  const argsArr = [...arguments]; // turn arguments into an ACTUAL array using spread
  return argsArr.reduce((accum, currentVal) => {
    return accum + currentVal;
  });
}

sumNums2(1, 2, 3, 4, 5); // 15

// Another example where arguments is not ideal:

function fullName(first, last) {
  // first, last and optional titles like "Jr.", "Sr.", "III"
  console.log(arguments);
  console.log(first);
}

fullName('Tom', 'Jones', 'III', 'Esquire');

// 0: "Tom"
// 1: "Jones"
// 2: "III"
// 3: "Esquire"
// Tom

// We can see here that arguments includes everything with no deliniation between the data.

// In summary, using the arguments object is not a fun time. No array functionality because it's not a real array. It has to be turned into one.

//______________________________________________________________________________

// Rest ...

// Looks like Spread, but it's not. Does the opposite.
// Consolidates data down into a single array.
// Goes in the parameter list of a function definition.

function restSum(...nums) {
  console.log(nums);
}

console.log(restSum(4, 5, 6, 7)); // [4, 5, 6, 7] --> Actual array literal

function restSum1(...nums) {
  return nums.reduce((sum, currentVal) => {
    return sum + currentVal;
  });
}

restSum1(4, 5, 6, 7); // 22

//___________________________________________________________________________

// Rest Params

// Collect all remaining arguments into an actual array:

function fullName1(first, last, ...titles) {
  console.log('first:', first);
  console.log('last:', last);
  console.log('titles:', titles);
}

fullName1('Tom', 'Jones', 'III', 'Esquire');

// first: Tom
// last: Jones
// titles: ["III", "Esquire"] --> Titles are collected separately

// Rest can be used in an arrow expression:

const restMultiply = (...nums) =>
  nums.reduce((total, currentVal) => total * currentVal);

console.log(restMultiply(5, 10)); // 50
