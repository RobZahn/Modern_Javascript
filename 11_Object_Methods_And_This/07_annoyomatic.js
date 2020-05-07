// Prints an annoying phrase every n milliseconds.

const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    "I can't even",
    'Totes',
    'YOLO',
    "Can't Stop, Won't Stop"
  ],

  // Pick random phrase
  pickPhrase() {
    const { phrases } = this;
    const randIdx = Math.floor(Math.random() * phrases.length);
    return phrases[randIdx];
  },

  // This will throw an error:

  startBad() {
    console.log(this.pickPhrase()); // <-- 'literally'

    setInterval(function () {
      console.log(this); // <--THIS is the Window.
      console.log(this.pickPhrase()); // <-- TypeError: this.pickPhrase() is not a function
    }, 1000);
  },

  //____________________________________________________________________________

  // Old way of preserving THIS:

  startOld() {
    // console.log(this.pickPhrase());
    var that = this; // preserves THIS which refers to annoyer object

    setInterval(function () {
      console.log(that); // <--THIS is the annoyer object.
      console.log(that.pickPhrase()); // annoyer.pickPhrase()
    }, 1000);
  },

  //____________________________________________________________________________

  // New and easy way using arrow functions:
  // NOTE: Arrow functions don't get their own THIS so the below code works.

  startNew() {
    // console.log(this.pickPhrase());

    setInterval(() => {
      console.log(this.pickPhrase()); // annoyer.pickPhrase()
    }, 1000);
  }
};

//______________________________________________________________________________

// annoyer.startBad();

// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// Uncaught TypeError: this.pickPhrase is not a function

// Here, because setInterval is a property of the Window object, this.pickPhrase() does not point to the annoyer object but to the Window.

//______________________________________________________________________________

// annoyer.startOld();

// The above works, but there's a better way to do it using arrow functions.

//______________________________________________________________________________

// annoyer.startNew();

// The new way works perfectly and doesn't require us to save a reference to THIS.

console.log('-----');
