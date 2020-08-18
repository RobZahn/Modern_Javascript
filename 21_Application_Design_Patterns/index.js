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

let timeoutID;
const onInput = event => {
  // force delay of n milliseconds after last keystroke
  // prevents too many requests
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

// Event Handlers
input.addEventListener('input', onInput);
