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
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },

  laugh: () => {
    // <-- Bad practice to use arrow funcs as methods
    console.log(this);
    console.log(`${this.nickName} says hahaha`);
  }
};

celebrity1.fullName(); // Cherilyn Sarkisian, AKA Cher
celebrity1.printBio();
// {first: "Cherilyn", last: "Sarkisian", nickName: "Cher", fullName: ƒ, printBio: ƒ}
// Cherilyn Sarkisian, AKA Cher is a person!

// THIS gives us a way to write methods that are aware of the objects they live in and that have access to and the ability to interact with all of the other properties of those objects.

//______________________________________________________________________________

// Invocation Context of THIS

// The value of this depends on the context of the function it is used in.

const printBio = celebrity1.printBio;

// printBio();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// Uncaught TypeError: this.fullName is not a function

// Invoking printBio() function style --> THIS === Window
// Invoking celebrity1.printBio() method style --> THIS === celebrity1

//______________________________________________________________________________

// Arrow Functions:

// The value of THIS never changes within an arrow function. It always points to the Window/Global scope.

// Generally, it's bad practice to use arrow functions as methods because when writing methods, we usually want to have access to the parent object.

celebrity1.laugh();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// undefined says hahaha
