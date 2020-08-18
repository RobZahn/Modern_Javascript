// *********
// Utilities
// *********

// Debounce wrapper
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

// Populate dropdown
const populateDropdown = movies => {
  for (let movie of movies) {
    const option = document.createElement('a');
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${imgSrc}">
      ${movie.Title}
      `;

    option.addEventListener('click', () => {
      input.value = movie.Title;
      deactivateDropdown();
    });

    resultsWrapper.append(option);
  }
};

const activateDropdown = () => dropdown.classList.add('is-active');
const deactivateDropdown = () => dropdown.classList.remove('is-active');
