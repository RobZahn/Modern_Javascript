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

// Fetch Data helper
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

// Build dropdown on input
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
      onMovieSelect(movie);
    });

    resultsWrapper.append(option);
  }
};

const onMovieSelect = async movie => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      i: movie.imdbID
    }
  });
  console.log(response.data);
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));

document.addEventListener('click', event => {
  if (!root.contains(event.target)) {
    deactivateDropdown();
  }
});
