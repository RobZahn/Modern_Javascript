// OBJECT LITERALS
// _______________________________________________________________________

// OBJECTS differ from arrays in that they are unordered collections of key value pairs.

// When assigning a variable to an ARRAY or OBJECT, the variable is pointing to a place in memory where the ARRAY or OBJECT is stored and not to the data structures themselves. Because of this, we can use const and still mutate the data within the collection.

// NOTE: Because OBJECTS are not ordered, we can't index into them like we can with an array.

// Keys in OBJECTS are automatically converted to strings and so it's not necessary to wrap them in quotes.

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

// We can access properties of an OBJECT with the following syntax: OBJECT.property or OBJECT[property].

fitBitData.totalSteps; // 308727
fitBitData["totalSteps"]; // 308727

// _______________________________________________________________________

// VALID IDENTIFIERS

// In JavaScript, variables cannot contain spaces or start with numbers.
// let my cat = "asawsfaef" is not valid
// let 76trombones = "song" is not valid

// If we were to use a property called 45, it would be automatically converted to a string. Therefore, we could not use the method style syntax nums.45 to retrieve the value. This is when the OBJECT[property] syntax comes into play

const nums = {
  100: "one hundred",
  45: "forty five",
  "76 trombones": "great song!", // valid key name but bad practice
};

nums["45"]; // "forty five"
nums["76 trombones"]; // "great song!"

// _______________________________________________________________________

// The OBJECT[property] syntax is also very useful when using dynamic values like variables.

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

let mysteryColor = "yellow";

palette[mysteryColor]; // "#f9ca24"

// palette.mysteryColor will not work because JavaScript will try looking for an actual property with the name mysteryColor inside of the OBJECT.

// _______________________________________________________________________

// Updating Properties:
fitBitData.workoutsThisWeek = "6 of 7";
fitBitData.totalMiles += 7.5;

// Adding New Properties:
fitBitData.heartStillBeating = "true";

// Square Bracket Notation:

const userReviews = {};

userReviews["queenBee49"] = 4.0;
userReviews["mrSmith78"] = 3.5;
userReviews; // {queenBee49: 4, mrSmith78: 3.5}
