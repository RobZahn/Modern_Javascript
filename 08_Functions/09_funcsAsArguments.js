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

//___________________________________________________________________________

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

repeatNTimes(rage, 5); // 'I HATE EVERYTHING' x 5

//___________________________________________________________________________

// Randomly call one of two functions:

function cry() {
  console.log("I'm so sad!");
}

function randomlyPick(func1, func2) {
  let rand = Math.random();

  if (rand < 0.5) {
    func1();
  } else {
    func2();
  }
}

randomlyPick(cry, rage);
