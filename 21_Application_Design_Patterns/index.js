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

// Event Handlers
input.addEventListener('input', event => {
  fetchData(event.target.value);
});
