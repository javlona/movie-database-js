import {
    searchCard,
    searchMovieUrl,
    toggler,
    Storage,
} from "./utilities.js"
import * as constants from './constants.js'

function getSearchedWord() {
    return Storage.get("searchWord")
}

let mediaType = "movie"

// fetch search API by media type
async function fetchSearchMovie(key) {
    const url = searchMovieUrl(mediaType, constants.API_KEY, key)

    try {
        let response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}

// fetch results of searched word
async function showSearched(query) {

    let response = await fetchSearchMovie(query ? query : getSearchedWord())
    searchResults.innerHTML = ""

    response.results.forEach((item) => {
        let card = searchCard(item.poster_path, item.title, item.release_date, item.overview, item.id, goToInfo)
        searchResults.innerHTML += card
    })
}

// load searched word
window.addEventListener('load', () => {
    search.value = getSearchedWord()
    getSearchedWord()
    showSearched()
})

// run on enter
constants.search.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {

        showSearched(search.value)
        Storage.add("searchWord", search.value)
    }
})

// toggle menu by setting data-visible to true
constants.menuToggle.addEventListener('click', () => toggler())

// open new window on click and save id of that movie
function goToInfo(id) {
    Storage.add("movie", id)
    window.open("/movie-info.html", "_blank")
}

// tell window that function exists
window.goToInfo = goToInfo;