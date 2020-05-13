// ********
// Promises
// ********

// A Promise is an object representing the eventual completion or failure of
// an asynchronous operation. Promises are a pattern for writing asynch code.

// Callbacks are attached to a Promise object rather than passed into a
// function.

// In the promise below, resolve and reject are functions that will immediately
// resolve or cancel the promise.

const willGetYouADog = new Promise((resolve, reject) => {});

console.log(willGetYouADog);
// Promise {<pending>}
// __proto__: Promise
// [[PromiseStatus]]: "pending"
// [[PromiseValue]]: undefined

// We aren't doing anything with this promise so its PromiseStatus is always
// 'pending' because it hasn't been resolved or rejected.

const willGetYouADog2 = new Promise((resolve, reject) => {
  reject();
});

console.log(willGetYouADog2);
// Promise {<rejected>: undefined}
// __proto__: Promise
// [[PromiseStatus]]: "rejected"
// [[PromiseValue]]: undefined

// Status is rejected

const willGetYouADog3 = new Promise((resolve, reject) => {
  resolve();
});

console.log(willGetYouADog3);
// Promise {<rejected>: undefined}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: undefined

// Status is resolved
