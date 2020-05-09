// document.getElementsByTagName() selects all DOM elements with a given tag and returns a list of JS objects.

document.getElementsByTagName('input');

// HTMLCollection(3) [input, input, input] <-- looks like an array but is NOT an actual array
// 0: input
// 1: input
// 2: input
// length: 3
// __proto__: HTMLCollection

document.getElementsByTagName('p');

// HTMLCollection(3) [p, p#main, p.special, main: p#main]

//______________________________________________________________________________

// If we try to select an element that doesn't exist on the page we will get an empty collection back:

document.getElementsByTagName('h3'); // HTMLCollection []

// If we select by tag name and the element is one of a kind we will get a collection containing only the one element. It will still be contained within an array-like collection.

document.getElementsByTagName('h1'); // HTMLCollection [h1.header]

//______________________________________________________________________________

// HTML Collections are array-like objects that contain other JS objects. We can index into them like with normal arrays:

const inputs = document.getElementsByTagName('input');

inputs[0]; // <input type="text" placeholder="Bear Name">
inputs.length; // 3

// We can't use any JS Array methods because HTML Collections are not arrays:

// inputs.pop(); // Uncaught TypeError: inputs.pop() is not a function

//______________________________________________________________________________

// We can iterate over HTML Collections:

for (let input of inputs) {
  console.log(input);
}

// <input type="text" placeholder="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit">

//______________________________________________________________________________

// We can easily turn the HTML Collection into a real array using the spread ... operator.

const inputsArr = [...inputs]; // [input, input, input]

//______________________________________________________________________________

// We can retrieve input values entered by the user like this:

for (let input of inputs) {
  console.log(input.value);
}

// Maximus
// password123
//              <-- submit button returns empty space because there's no value
