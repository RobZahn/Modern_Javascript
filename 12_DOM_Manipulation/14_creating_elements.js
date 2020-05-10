// document.createElement() creates a new empty element object of the specified tag type.

const newh2 = document.createElement('h2');

newh2.innerText = 'I Like Animals';

newh2; // <h2>I Like Animals</h2>

newh2.classList.add('.special');

// NOTE: This H2 is still not showing up on the webpage. We need to select an existing element in the DOM to append it to.

// parent.appendChild() adds the specified element as a child to the target element.

const section = document.querySelector('section');

section.appendChild(newh2);

// Notice that newh2 is now visible on the page. When we appendChild, the appended element is added as the very last nested child.

//______________________________________________________________________________

// Create a new image element, assign it a src link and then append to the end of the body.

const newImg = document.createElement('img');
newImg.src =
  'https://images.unsplash.com/photo-1589011915994-46f6a2d6c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
newImg.style.width = '300px';

document.body.appendChild(newImg);

//______________________________________________________________________________

// Create new link and append to the end of the first paragraph.

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video!';
newLink.href = 'https://www.youtube.com/watch?v=ihUQ3ZE4kB8';
newLink.setAttribute('target', '_blank');

firstP.appendChild(newLink);
