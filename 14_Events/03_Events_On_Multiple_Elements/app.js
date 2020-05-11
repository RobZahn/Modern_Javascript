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
const changeColor = function () {
  console.log(this); // The clicked box
  h1.style.color = this.style.backgroundColor;
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
