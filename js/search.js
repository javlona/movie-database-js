import {searchCard, searchMovieUrl} from "./utilities.js"
import * as constants from './constants.js'

function getSearchedWord() {
    return JSON.parse(localStorage.getItem("searchWord"))
}

// fetch search API
async function fetchSearchMovie() {
    const searchUrl = searchMovieUrl(constants.API_KEY, getSearchedWord())

    try {
        let response = await fetch(searchUrl)
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}


// fetch results of searched word
async function showSearched() {
    let response = await fetchSearchMovie()
    
    response.results.forEach((item) => {
        let card = searchCard(item.poster_path, item.title, item.release_date, item.overview)
        constants.searchResults.innerHTML += card
    })
}
  

window.addEventListener('load', () => {

    getSearchedWord()
    showSearched()

})