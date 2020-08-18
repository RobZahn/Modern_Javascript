// Query Selectors
const input = document.querySelector('input');

const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      s: searchTerm
    }
  });

  return response.data.Search;
};

const onInput = event => {
  const movies = fetchData(event.target.value);
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
