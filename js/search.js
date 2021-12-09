import {searchCard, searchMovieUrl, toggler, Storage} from "./utilities.js"
import * as constants from './constants.js'

function getSearchedWord() {
    return Storage.get("searchWord")
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
async function showSearched(query) {
    
    let response = await fetchSearchMovie(query ? query : getSearchedWord())
    console.log(response.results)
    searchResults.innerHTML = ""
    console.log(response)
    
    response.results.forEach((item) => {
        let card = searchCard(item.poster_path, item.title, item.release_date, item.overview, item.id, goToInfo)
        searchResults.innerHTML += card
    })

}


// function isPosterAvbailable(arr) {
//     if(arr.poster_path === null) return 
// }


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


//like button
// document.addEventListener('DOMContentLoaded', function() {
//     var likeButton = document.getElementById('like-button');
//     likeButton.addEventListener('click', function() {
//       window.lb = likeButton;
//       likeButton.classList.toggle('selected');
//     });
//   }, false);