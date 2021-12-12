import * as constants from './constants.js'
import {popularUrl, movieCard, goToInfo } from './utilities.js'

let page = 1;
let mediaType = "movie";

// fetch popular into cards
async function fetchPopular(mediaType, name, date) {

    try {
        let response = await fetch(popularUrl(mediaType, constants.API_KEY, page))
        let popularData = await response.json()

        popularData.results.forEach((item) => {
            let card = movieCard(item.poster_path, item[name], item[date], item.vote_average, item.id, "card-tall")
            constants.popularResults.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

// categories side menu movies
constants.searchMoviesBtn.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    mediaType = "movie"
    fetchPopular(mediaType, "title", "release_date")
})

// categories side menu TV Shows
constants.searchShowsBtn.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    page = 1;
    mediaType = "tv"
    fetchPopular(mediaType, "name", "first_air_date")
})

// load more
function loadMore() {
    if(mediaType === "movie") {
        page++
        fetchPopular(mediaType, "title", "release_date")
    } else {
        mediaType = "tv"
        page++
        fetchPopular(mediaType, "name", "first_air_date")
    }
}

// run load more function
document.querySelector('#loadMoreBtn').addEventListener('click', loadMore)

// load popular movies on load
window.addEventListener('load', () => {
    fetchPopular("movie", "title", "release_date" )
})

window.goToInfo = goToInfo  