// classList is a property that returns an array-like DOM Token List that contains the classes that exist on the target element. It has its own methods for interfacing with the classes.

// This is super useful for adding or removing many styles at once.

// Select first todo class inside of todos id element.
const todo = document.querySelector('#todos .todo');

todo.classList.remove('done');

todo.classList.add('done');

todo.classList.toggle('done');
