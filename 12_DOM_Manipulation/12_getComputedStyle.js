// getComputedStyle() is a method that takes an HTML element as an argument and returns a CSS Style Declaration object containing a massive list of key-value pairs for all CSS properties. All current styles will be displayed whether they are in-line or come from a style sheet.

const li = document.querySelector('li');
li.style.color; // ''

getComputedStyle(li);

// CSSStyleDeclaration {0: "animation-delay", 1: "animation-direction", 2: "animation-duration", 3: "animation-fill-mode", 4: "animation-iteration-count", 5: "animation-name", 6: "animation-play-state", 7: "animation-timing-function", 8: "background-attachment", 9: "background-blend-mode", 10: "background-clip", 11: "background-color", etc...

const compStyles = getComputedStyle(h1);

compStyles.color; // rgb(218, 112, 214)
