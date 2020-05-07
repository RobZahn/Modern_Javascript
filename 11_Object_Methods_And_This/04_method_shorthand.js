// Method shorthand syntax

// This is a new shorthand for including methods in an object:

const math2 = {
  blah: 'Hi!',

  add(x, y) {
    return x + y;
  }

  // We can omit the usual key : value syntax for this much shorter version.
};

const auth = {
  login() {
    console.log('Logged you in.');
  },
  logout() {
    console.log('Goodbye!');
  }
};
