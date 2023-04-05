const API_URL = `https://api.themoviedb.org/3/discover/movie/?sort_by=populaty.desc&api_key=86f7c78abc5fc2a1971ef902c51140da&page=${Math.floor(
  Math.random() * 40 + 1
)}`;

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const SEARCH_API =
  'https://api.themoviedb.org/3/search?movie?api_key=86f7c78abc5fc2a1971ef902c51140da&query=';

const form = document.getElementById('form');

const search = document.getElementById('search');

const main = document.getElementById('main');

const showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, original_title, poster_path, vote_average, overview } =
      movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
        <img src="${
          poster_path
            ? IMG_PATH + poster_path
            : 'https://images.unsplash.com/photo-1610337673044-720471f83677?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80'
        }"
                alt="movie">

            <div class="movie-info">
                <h3>${title !== undefined ? title : original_title}</h3 >
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div >
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
`;
    main.appendChild(movieEl);
    // console.log(movieEl)
  });
};

const getClassByRate = (vote_average) => {
  if (vote_average >= 8) {
    return 'green';
  } else if (vote_average >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

const getMovies = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  fetch(API_URL, config)
    .then((response) => response.json())
    .then(
      (data) => showMovies(data.results)
      // console.log(data.results)
    );
};

const searchMovies = () => {
  const searchTerm = `'${search.value}'`;

  console.log(SEARCH_API + searchTerm);

  fetch(SEARCH_API + searchTerm)
    .then((response) => response.json())
    .then((data) => showMovies(data.results));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    searchMovies();
    search.value = '';
  } else {
    window.location.reload();
  }
});

getMovies();
