// ***************
// Events Pattern:
// ***************

// Target Element      -       Event Type          -     Code to run
//
// Button              -       Click               -     Change color
//
// Input               -       Return/Enter key    -     Get search results
//
// Image               -       Mouseover           -     Display image caption

// There are 3 different syntaxes available for events. Only 1 of them is really
// worth using.

// ***********************
// Option 1: Inline Events
// ***********************

// This is bad for the same reason why inline CSS is generally bad. It clutters
// the markup and makes things hard to keep track of.

// The attribute names for these inline events are structured onEventName="".
// onclick, onmouseover, etc.

// <button onclick="alert('You Clicked Me!')">Click Me 1</button>

// *******************************************
// Option 2: "On Properties" Set to a Function
// *******************************************

// The main disadvantage of this version is that we can't assign more than one
// of the same type of event to a target. If we tried to assign btnClicker.onclick
// to a second function, we would just be overwriting the previous one because
// btnClicker.onclick is a variable containing a function.

const btnClicker = document.querySelector('#clicker');

btnClicker.onclick = function () {
  console.log('You clicked me! Go away!');
};

btnClicker.onclick = function () {
  console.log('The first onclick has been overwritten!');
};

btnClicker.ondblclick = function () {
  console.log('Double click!');
};

// **************************************
// Option 3: addEventListener (PREFERRED)
// **************************************

// Specify the event type and a callback to run

const eventBtn = document.querySelector('#event-button');

// We can add as many of the same type of event as we want to a given target:

eventBtn.addEventListener('click', () => {
  alert('Clicked!');
});

eventBtn.addEventListener('click', () => {
  console.log('SECOND THING!');
});

eventBtn.addEventListener('mouseover', function () {
  eventBtn.innerText = 'Changed!';
});

eventBtn.addEventListener('mouseout', function () {
  eventBtn.innerText = 'Event Button';
});

window.addEventListener('scroll', function () {
  console.log('STOP SCROLLING!');
});
