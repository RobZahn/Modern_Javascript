// HIGHER ORDER FUNCTIONS are functions that operate on/with other functions. They can accept other functions as arguments or return another function.

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("Hahaha!");
}

callTwice(laugh);

// Hahaha!
// Hahaha!
