// insertBefore() is a method that inserts an HTML element as a child of a target parent element. The syntax is slightly unintuitive.

// parent.insertBefore('element to be inserted', 'element that should come after it')

const parentUL = document.querySelector('ul');

const newLI = document.createElement('li');

newLI.innerText = 'I AM A NEW LI';

// Below, we are inserting newLI as a child of the parentUL and it should be placed before firstLI

parentUL.insertBefore(newLI, firstLI);

//______________________________________________________________________________

// Insert before the LAST LI:

const lastLI = document.querySelectorAll('li.todo')[2];

parentUL.insertBefore(newLI, lastLI);

//______________________________________________________________________________

// insertAdjacentElement() is a method that insets an HTML element at a given position relative to the element it is invoked upon. NOTE: Not a very popular method because it requires memorizing 4 option strings.

// targetElement.insertAdjacentElement(position, element)

// position options:

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the target Element, after its last child.
// 'afterend': After the targetElement itself.

//______________________________________________________________________________

const iTag = document.createElement('i');
iTag.innerText = 'I am italic';

const p1 = document.querySelector('p');

// Insert iTag before first paragraph on the page:

p1.insertAdjacentElement('beforebegin', iTag);

// After the paragraph:

p1.insertAdjacentElement('afterend', iTag);

// Inside the paragraph, before first child:

p1.insertAdjacentElement('afterbegin', iTag);

// Inside the paragraph, after last child:

p1.insertAdjacentElement('beforeend', iTag);

//______________________________________________________________________________

// append() allows us to insert multiple elements at once and is a bit simpler than insertBefore() and insertAdjacentElement()

// Append newLI and iTag into p1:

p1.append(iTag, newLI);

// prepend() is like append() but it will insert elements as the first child(ren)

p1.prepend(iTag, newLI);
