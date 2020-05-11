const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

// Changes color of H1 to the color of the clicked box
const changeColor = function (event) {
  console.log(this); // The clicked box
  h1.style.color = this.style.backgroundColor;
  console.log(event); // <-- Event object
  // MouseEvent {isTrusted: true, screenX: 1061, screenY: 264, clientX: 40, clientY: 148, …}
};

const h1 = document.querySelector('h1');
const container = document.querySelector('#boxes');

for (let color of colors) {
  // Create a div element for each color in the colors arr
  const box = document.createElement('div');
  // Set inline color for each box
  box.style.backgroundColor = color;
  // Assign box class to each box
  box.classList.add('box');
  // Append each box to the container section #boxes
  container.append(box);
  // Add listener to each box and call changeColor
  box.addEventListener('click', changeColor);
}

// NOTE: When assigning an event listener to a target element, THIS always refers to the target element itself.

// The Event Object:

// When we click on an element that has an event function assigned to it, the
// associated function is called automatically and is passed an event object.
// We always have access to the event object which contains tons of useful
// properties that describe the event.

document.body.addEventListener('keypress', function (event) {
  console.log(event);
  // KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
});
