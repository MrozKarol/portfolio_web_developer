const API_URL = 'https://api.themoviedb.org/3/discover/movie/?sort_by=populaty.desc&api_key=86f7c78abc5fc2a1971ef902c51140da&page=30'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie/?api_key=86f7c78abc5fc2a1971ef902c51140da&query='

const form = document.getElementById('form')

const search = document.getElementById('search')

const getMovies = () => {

    const config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }

    fetch(API_URL, config)
        .then(response => response.json())
        .then(data =>
            console.log(data.results)
        )
}



getMovies()

const searchMovies = (e) => {

    const searchTerm = `'${search.value}'`

    console.log(SEARCH_API + searchTerm)

    fetch(SEARCH_API + searchTerm)
        .then(response => response.json())
        .then(data =>
            console.log(data.results)
        )
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {

        searchMovies()
        search.value = ''

    } else {
        window.location.reload()
    }

})