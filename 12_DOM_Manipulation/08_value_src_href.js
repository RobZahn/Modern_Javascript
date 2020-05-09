// value is a property that returns the value of a form input.

form.innerHTML =
  '<input type="text" placeholder="Bear Name" value="Taco"/><input type="password" placeholder="password" /><input type="checkbox" /><input type="range" min="100" max="500" /><input type="submit" />';

const inputs1 = document.querySelectorAll('input');

inputs1[0].value; // 'Taco'

// checked is a property that returns a boolean for checkbox inputs.

inputs1[2].checked; // false

// href is a property that returns the href of an a tag:

const a = document.querySelector('a');
a.href; // http://www.cats.com/cute

a.href = 'http://www.google.com';

// src is a property that returns the source of an img tag:

const image = document.querySelector('img');
image.src =
  'https://images.unsplash.com/photo-1588917165050-09f74917f1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
