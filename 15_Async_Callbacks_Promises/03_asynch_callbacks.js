// NOTE: JavaScript is single threaded which means it can only ever evaluate
// one line of code at a time!

// What happens when something takes a long time? We use callbacks.

// Notice that even though JS is only able to 'focus' on one thing at a time,
// this code functions as expected. Each message is printed to the console in
// the correct order. While JS is waiting for the timer to go off, it is able to
// evaluate the 'I HAPPEN SECOND' console log.

console.log('I HAPPEN FIRST');

setTimeout(() => {
  console.log('I HAPPEN THIRD');
}, 3000);

console.log('I HAPPEN SECOND');

// This is possible because the browser, which is probably written in C++, is
// handling work that JS itself is not capable of. JS is delegating the job of
// waiting for the setTimeout() to the browser and continuing along. When the
// timer goes off, the browser reminds JS to execute the code.

// Browsers come with Web APIs that are able to handle certain tasks in the
// background like making requests or setTimeout.

// The JS call stack recognizes these Web API functions and passes them off to
// the browser to take care of.

// Once the browser finishes those tasks, they return and are pushed onto the
// stack as a callback.

// If the browser was not capable of this, our JS code would grind to a halt
// whenever a certain action required time to complete.
