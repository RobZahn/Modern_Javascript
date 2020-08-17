// **********
// Subclasses
// **********

// The extends keyword passes functionality of a parent class to a child class. The child class will create a new object using the constructor function of its parent.

// The super keyword references the class that we are extending from and is useful for when we want additional properties on subclasses.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    // super is transferring name and age from the constructor function of Pet.
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'Meow!';
  }
}

class Dog extends Pet {
  bark() {
    return 'Woof!';
  }
  // Another method called .eat is defined here and will overwrite the .eat method from Pet.
  eat() {
    return `${this.name} scarfs down his food.`;
  }
}

const monty = new Cat('Monty', 9);
const wyatt = new Dog('Wyatt', 13);
monty.eat(); // "Monty is eating."
wyatt.eat(); // "Wyatt is eating."
