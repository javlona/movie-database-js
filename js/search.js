import {searchCard, searchMovieUrl, toggler} from "./utilities.js"
import * as constants from './constants.js'

function getSearchedWord() {
    return localStorage.searchWord
}

// fetch search API
async function fetchSearchMovie(key) {
    const searchUrl = searchMovieUrl(constants.API_KEY, key)

    try {
        let response = await fetch(searchUrl)
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}


// fetch results of searched word
async function showSearched() {
    let response = await fetchSearchMovie(getSearchedWord())
    console.log(response.results)
    response.results.forEach((item) => {
        let card = searchCard(item.poster_path, item.title, item.release_date, item.overview)
        constants.searchResults.innerHTML += card
    })
}


// function isPosterAvbailable(arr) {
//     if(arr.poster_path === null) return 
// }


// load searched word
window.addEventListener('load', () => {
    
    getSearchedWord()
    showSearched()
})


// run on enter
constants.search.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        console.log('working')
        fetchSearchMovie(search.value)
        showSearched()
    }
})


// toggle menu by setting data-visible to true
constants.menuToggle.addEventListener('click', () => toggler())


//like button
// document.addEventListener('DOMContentLoaded', function() {
//     var likeButton = document.getElementById('like-button');
//     likeButton.addEventListener('click', function() {
//       window.lb = likeButton;
//       likeButton.classList.toggle('selected');
//     });
//   }, false);