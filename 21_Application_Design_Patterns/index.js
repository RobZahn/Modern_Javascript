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

const onInput = event => {
  debounce(fetchData(event.target.value));
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
