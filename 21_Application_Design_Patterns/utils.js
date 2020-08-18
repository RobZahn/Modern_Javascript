// *********
// Utilities
// *********

const debounce = (func, delay = 1000) => {
  // return wrapper function that will delay request from firing off
  // until n milliseconds after final keystroke
  let timeoutID;

  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
