// Using THIS in methods

const celebrity = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',

  fullName() {
    console.log(this);
    console.log(this.first);
    console.log(this.last);
    console.log(this.nickName);
  }
};

celebrity.fullName();
// {first: "Cherilyn", last: "Sarkisian", nickName: "Cher", fullName: ƒ}
// Cherilyn
// Sarkisian
// Cher

// The value of THIS is the object in which the method lives.

// Using destructuring:

const celebrity1 = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',

  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last}, AKA ${nickName}`;
  },

  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  }
};

celebrity1.fullName(); // Cherilyn Sarkisian, AKA Cher
celebrity1.printBio(); // Cherilyn Sarkisian, AKA Cher is a person!

// THIS gives us a way to write methods that are aware of the objects they live in and that have access to and the ability to interact with all of the other properties of those objects.
