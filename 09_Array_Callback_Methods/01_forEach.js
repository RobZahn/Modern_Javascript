// forEach

// Accepts a callback function. Calls the function once per element in the array. The callback can be anonymous or named.

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num * 2);
});

// 40
// 42
// 44
// 46
// 48
// 50
// 52
// 54

console.log("-----");

//___________________________________________________________________________

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

// 60
// 63
// 66
// 69
// 72
// 75
// 78
// 81

console.log("-----");

//___________________________________________________________________________

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

console.log("-----");

//___________________________________________________________________________

// forEach will take an additional parameter if we want to use the index:

letters = ["a", "b", "c", "d", "e"];

letters.forEach(function (char, idx) {
  console.log(idx, char);
});

// 0 "a"
// 1 "b"
// 2 "c"
// 3 "d"
// 4 "e"

console.log("-----");
