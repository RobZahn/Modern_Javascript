// ********************************
// Call Stacks - First In, Last Out
// ********************************

// When a script calls a function, the JS interpreter adds it to the call stack
// and then starts carrying out the function.

// Any functions that are called by that function are added to the call stack
// further up and run where their calls are reached.

// When the current function is finished, the interpreter takes it off the stack
// and resumes execution where it left off in the last code listing.

// Example:

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

// First function isRightTriangle() should return true if the square of a plus
// the square of b is equal to the square of c.

// isRightTriangle() calls square(a) which in turn calls multiply(). multiply()
// has no functions to call so it returns its value to square(a) which returns
// its value to isRightTriangle(). This process continues for the next two
// square() function calls.

// Finally, isRightTriangle() returns its value.
