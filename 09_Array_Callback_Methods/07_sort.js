// Array.sort()

// Sorts elements in the array according to a callback function that makes a comparison between two arguments. MUTATES ORIGINAL ARRAY!!!

// arr.sort(compareFunc(a, b))

// If compareFunc(a,b) returns a negative number: SORT A BEFORE B
// If compareFunc(a,b) returns a positive number: SORT B BEFORE A
//If compoareFunc(a,b) returns 0: A AND B ARE UNCHANGED

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const ascSort = prices.sort((a, b) => a - b);
console.log(ascSort); // [12, 35.99, 99.99, 400.5, 3000, 9500]

// Breakdown:

// a              b
// 400.5     -    3000      =      NEGATIVE NUMBER      :  A BEFORE B
// 35.99     -    12        =      POSITIVE NUMBER      :  B BEFORE A

const descSort = prices.sort((a, b) => b - a);
console.log(descSort); // [9500, 3000, 400.5, 99.99, 35.99, 12]

// Breakdown:

// b              a
// 4000     -    1000       =      POSITIVE NUMBER      :  B BEFORE A
// 35.99     -    12        =      POSITIVE NUMBER      :  B BEFORE A
