// Computed Properties

// Allows us to add properties to objects with dynamic keys.

// Traditional way of adding dynamic keys to an object:

const role = 'host';
const person = 'Jools Holland';
const role2 = 'director';
const person2 = 'James Cameron';

// First initialize an empty object and then add the keys like this:

const team = {};
team[role] = person;
team[role2] = person2;
console.log(team); // {host: "Jools Holland", director: "James Cameron"}

//______________________________________________________________________________

// New syntax using computed properties allow us to initalize a new object and add keys all at once. Expressions passed in as keys are evaluated before they are added.

const newTeam = {
  [role]: person,
  [role2]: person2,
  [1 + 5 + 10]: 'sixteen'
};

console.log(newTeam);
// {16: "sixteen", host: "Jools Holland", director: "James Cameron"}

//______________________________________________________________________________

// Function that takes in an object and returns a copy of that object with a new property added in.

function addProperty(object, key, val) {
  return { ...object, [key]: val };
}

const newTeamTwo = addProperty(newTeam, 'happy', ':)');

console.log(newTeamTwo);
// {
//   16: "sixteen",
//   host: "Jools Holland",
//   director: "James Cameron",
//   happy: ":)"
// }

console.log('-----');
