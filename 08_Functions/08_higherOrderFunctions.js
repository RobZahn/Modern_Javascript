// HIGHER ORDER FUNCTIONS

function addNums(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiplyNums(x, y) {
  return x * y;
}

function divideNums(x, y) {
  return x / y;
}

// Put all four of these functions into an array:

const operations = [addNums, subtract, multiplyNums, divideNums];

// Index into the array and call one of the functions like so:

operations[1](100, 4); // 96

// Loop through operations array and call each function:

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

// 35
// 25
// 150
// 6

// By adding a function to an object, we are creating a method on that object.

const thing = {
  doSomething: multiplyNums,
};

// thing
//   {doSomething: ƒ}
//   doSomething: ƒ multiplyNums(x, y)
//   __proto__: Object

thing.doSomething(50, 2); // 100
