import * as constants from './constants.js'
import {popularUrl, movieCard, topRatedUrl, goToInfo } from './utilities.js'

let page = 1;
let mediaType = "movie";
let name = "title";
let date = "release_date"

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

async function fetchTopRated(mediaType, name, date) {

    try {
        let response = await fetch(topRatedUrl(mediaType, constants.API_KEY, page))
        let topRated = await response.json()

        topRated.results.forEach((item) => {
            let card = movieCard(item.poster_path, item[name], item[date], item.vote_average, item.id, "card-tall")
            constants.popularResults.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }
}



constants.tvShowNav.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    mediaType = "tv"
    name = "name"
    date = "first_air_date"
    page = 1
    fetchPopular(mediaType, name, date)
})

// categories side menu movies
constants.searchMoviesBtn.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    page = 1;
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

// categories side menu top Rated
constants.searchTopRatedBtn.addEventListener('click', () => {
    constants.popularResults.innerHTML = ""
    page = 1;
    mediaType
    fetchTopRated(mediaType, name, date)
})

// load more
function loadMore() {
    switch(mediaType) {
        case "movie":
            page++
            fetchPopular(mediaType, "title", "release_date")
            break;
        case "tv":
            page++
            fetchPopular(mediaType, "name", "first_air_date")
            break;

    }
}

// run load more function
document.querySelector('#loadMoreBtn').addEventListener('click', loadMore)

// load popular movies on load
window.addEventListener('load', () => {
    fetchPopular("movie", "title", "release_date" )
})

window.goToInfo = goToInfo