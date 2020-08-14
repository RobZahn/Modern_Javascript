// *****
// Async
// *****

// Async functions always return a promise.
// If the function returns a value, the promise will be resolved with that value.
// If the function throws an exception, the promise will be rejected.

// Basic Syntax:

// async function hello() {
//   return 'Hey guy!';
// }

// hello();
// // Promise {<fulfilled>: "Hey guy!"}
// async function uhOh() {
//   throw new Error('oh no!');
// }

// uhOh();
// // Promise {<rejected> Error: oh no!}

// _____________________________________________________________________________

// Example:

// function greet() {
//   return 'HELLO!';
// }

// greet();
// // "HELLO!"

async function greet() {
  return 'HELLO!';
}

greet();
// Promise {<fulfilled>: "HELLO!"}

greet().then(val => {
  console.log('PROMISE FULFILLED WITH:', val);
});

// PROMISE FULFILLED WITH: HELLO!

// function add(x, y) {
//   return x + y;
// }

// add(1, 1);
// // 2

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be numbers';
  }
  return x + y;
}

add(4, 5);
// Promise {<fulfilled>: 9}

// add('cow', 5);
// Promise {<rejected>: "X and Y must be numbers"} -> still get a promise back
// Uncaught X and Y must be numbers

add('e', 'r')
  .then(val => {
    console.log('PROMISE FULFILLED WITH:', val);
  })
  .catch(err => {
    console.log('PROMISE REJECTED WITH:', err);
  });
