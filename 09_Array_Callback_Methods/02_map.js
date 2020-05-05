// Map

// Creates a new array with the results of calling a callback on every element in the array. Elements MUST be returned in order for map to work.

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (text) {
  return text.toUpperCase();
});

console.log(texts); // ["rofl", "lol", "omg", "ttyl"]
console.log(caps); // ["ROFL", "LOL", "OMG", "TTYL"]

console.log("-----");

//___________________________________________________________________________

const moreNumbers = [10, 11, 12, 13, 14, 15, 16, 17];

const doubles = moreNumbers.map(function (num) {
  return num * 2;
});

console.log(doubles); // [20, 22, 24, 26, 28, 30, 32, 34]

console.log("-----");

const numDetails = moreNumbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

console.log(numDetails);
// [
//   { value: 10, isEven: true },
//   { value: 11, isEven: false },
//   { value: 12, isEven: true },
//   { value: 13, isEven: false },
//   { value: 14, isEven: true },
//   { value: 15, isEven: false },
//   { value: 16, isEven: true },
//   { value: 17, isEven: false },
// ];

console.log("-----");

//___________________________________________________________________________

const words = ["asap", "byob", "rsvp", "diy"];

const alteredWords = words.map(function (word) {
  return word.split("").join(".").toUpperCase();
});

console.log(alteredWords);
