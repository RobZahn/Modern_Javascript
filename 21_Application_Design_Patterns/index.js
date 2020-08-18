// Query Selectors
const input = document.querySelector('input');

const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      s: searchTerm
    }
  });

  console.log(response.data);
};

const debounce = (func, delay = 1000) => {
  // return a function that will wrap around onInput
  // delaying request from firing off until n milliseconds after final keystroke
  let timeoutID;

  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = event => {
  debounce(fetchData(event.target.value));
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
