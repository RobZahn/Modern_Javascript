// Query Selectors
const input = document.querySelector('input');
const target = document.querySelector('#target');
const root = document.querySelector('.autocomplete');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// Config widget HTML
root.innerHTML = `
<label><strong>Search for a Movie</strong></label>
<input type="text" class="input" />
<div class="dropdown">
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>
`;

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

  for (let movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
    <h2>${movie.Title}</h2>
    <img src="${movie.Poster}">
    `;

    target.append(div);
  }
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
