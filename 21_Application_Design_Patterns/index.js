// *****
// Index
// *****

const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
  <img src="${imgSrc}" />
  ${movie.Title} (${movie.Year})
`;
  },

  inputValue(movie) {
    return movie.Title;
  },

  async fetchData(searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: searchTerm
      }
    });

    if (response.data.Error) return [];

    return response.data.Search;
  }
};

createAutoComplete({
  ...autoCompleteConfig,
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
  },
  root: document.querySelector('#left-autocomplete'),
  itemLabel: 'Movie #1'
});

createAutoComplete({
  ...autoCompleteConfig,
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
  },
  root: document.querySelector('#right-autocomplete'),
  itemLabel: 'Movie #2'
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      i: movie.imdbID
    }
  });

  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === 'left') {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  console.log(leftMovie);

  let leftNums = [];
  const leftChars = leftMovie.Awards.split('');
  const alpha = 'abcdefghijklmnopqrstuvwxyz.,;!?& ';

  for (let char of leftChars) {
    if (!alpha.includes(char.toLowerCase())) {
      leftNums.push(parseInt(char));
    }
  }

  console.log(leftNums);
};

// runComparison('Nominated for 1 Oscar. Another 38 wins & 79 nominations.');

const movieTemplate = ({
  Poster,
  Title,
  Year,
  Genre,
  Plot,
  Awards,
  BoxOffice,
  Metascore,
  imdbRating,
  imdbVotes
}) => {
  const dollars = parseInt(BoxOffice.replace(/[$,]/g, ''));
  const metascore = parseInt(Metascore);
  const rating = parseFloat(imdbRating);
  const votes = parseInt(imdbVotes.replace(/,/g, ''));
  console.log(dollars, metascore, rating, votes);
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h2>${Title}</h2>
          <h4>${Year}</h4>
          <h5>${Genre}</h5>
          <p>${Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
