// FUNCTION EXPRESSIONS

// Another way of defining a function is as a function expression. Function expressions can be named or anonymous and they are stored in variables; we are able to do this because in JavaScript, functions are objects.

const getSquare = function (num) {
  return num * num;
};

getSquare(7); //49

//

function add(x, y) {
  return x + y;
}

const addTwo = function (x, y) {
  return x + y;
};

addTwo(4, 5); // 9

//

const product = function multiply(x, y) {
  return x * y;
};
