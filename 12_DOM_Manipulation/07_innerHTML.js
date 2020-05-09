// innerHTML is a property that returns the innerText and ALL other HTML tags inside of an element.

const form = document.querySelector('form');
form.innerHTML;

// <input type="text" placeholder="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit"></input>

// We can replace HTML elements using innerHTML:

form.innerHTML = '<b>I am a bold tag</b>';
form; //<form action=""><b>I am a bold tag</b></form>

// To append content without overwriting it:

h1.innerHTML += ' is cool';
h1; // My Webpage is cool
