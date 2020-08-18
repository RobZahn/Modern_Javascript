// Config widget HTML
const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><strong>Search for a Movie</strong></label>
<input type="text" class="input" />
<div class="dropdown">
<div class="dropdown-menu">
<div class="dropdown-content results"></div>
</div>
</div>
`;

// Query Selectors
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// Fetch Movies
const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      s: searchTerm
    }
  });

  if (response.data.Error) return [];

  return response.data.Search;
};

// Populate dropdown with requested movies
const onInput = async event => {
  const movies = await fetchData(event.target.value);
  if (!movies.length) {
    deactivateDropdown();
    return;
  }

  resultsWrapper.innerHTML = '';
  activateDropdown();
  populateDropdown(movies);
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));

document.addEventListener('click', event => {
  if (!root.contains(event.target)) {
    deactivateDropdown();
  }
});
