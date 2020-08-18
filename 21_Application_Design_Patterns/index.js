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

// Widget Logic

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

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  console.log(movies);

  resultsWrapper.innerHTML = '';
  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const option = document.createElement('a');
    option.classList.add('dropdown-item');

    option.innerHTML = `
    <img src="${movie.Poster}">
    ${movie.Title}
    `;

    resultsWrapper.append(option);
  }
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
