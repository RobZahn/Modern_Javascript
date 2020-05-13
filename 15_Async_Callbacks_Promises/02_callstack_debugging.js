// ***********************************
// Debugging with the Chrome Dev Tools
// ***********************************

// Repeats a string x times.
const repeat = (str, times) => {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

// Upper cases a string and adds 3 !'s
const scream = str => {
  return str.toUpperCase() + '!!!';
};

// Calls scream on the phrase arg and repeats it x times.
const getRantText = phrase => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

// Make new empty h1 and set innerText to result of getRantText()
const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1');
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};

makeRant('I hate mayonnaise', document.body);
makeRant('If you have to cough, cover your mouth', document.body);
