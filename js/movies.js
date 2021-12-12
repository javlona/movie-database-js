import * as constants from './constants.js'
import {popularUrl, movieCard, goToInfo } from './utilities.js'

let page = 1;

// fetch popular into cards
async function fetchPopular(mediaType, name, date) {

    try {
        let response = await fetch(popularUrl(mediaType, constants.API_KEY, page))
        let popularData = await response.json()
        console.log(popularData)
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
    fetchPopular("movie", "title", "release_date")
})

// categories side menu TV Shows
constants.searchShowsBtn.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    fetchPopular("tv", "name", "first_air_date")
})

// load more
function loadMore() {
    
}

window.addEventListener('load', () => {
    fetchPopular("movie", "title", "release_date" )
})

window.goToInfo = goToInfo  