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

const btnClicker = document.querySelector('#clicker');

btnClicker.onclick = function () {
  console.log('You clicked me! Go away!');
};

btnClicker.ondblclick = function () {
  console.log('Double click!');
};

// **************************************
// Option 3: addEventListener (PREFERRED)
// **************************************

// Specify the event type and a callback to run
