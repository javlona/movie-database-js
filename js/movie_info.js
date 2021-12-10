import * as constants from './constants.js'
import {
    creditsUrl,
    recommendationUrl,
    recCard,
    peopleCard,
    Storage,
    singleMovieUrl,
    singleMovie,
    goToInfo,
    toggler,
    seachInputToggle,
    searchButtonTrigger
} from './utilities.js'


let movId;

// get movie id from local Storage
window.addEventListener('load', function () {
    //movId = Storage.get('movie')

    movId = Storage.get('movie')
    singleMovieToUI()
    fetchRecommended()
    fetchCredits()
})

// single movie ui
async function singleMovieToUI() {
    const movieUrl = singleMovieUrl(constants.API_KEY, movId)

    try {
        let response = await fetch(movieUrl)
        let movData = await response.json()

        let movie = singleMovie(movData.poster_path, movData.title, movData.release_date, movData.runtime, movData.tagline, movData.overview, movData.genres, movData.id)
        constants.posterContainer.innerHTML = movie

        constants.movieInfo.style = `
        background: linear-gradient(-45deg, rgb(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
        url(${constants.backdropBig}${movData.backdrop_path}) top center /cover;
        `

    } catch (error) {
        console.log(error)
    }
}


// fetch movie credits for a particular movie
async function fetchCredits() {

    try {
        let response = await fetch(creditsUrl(movId))
        let credits = await response.json()

        credits.cast.forEach((item) => {
            let card = peopleCard(item.profile_path, item.name, item.character)
            constants.sliderCast.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

// fetch recommended movies
async function fetchRecommended() {

    try {
        let response = await fetch(recommendationUrl(movId))
        let recommended = await response.json()
        console.log(recommended)
        recommended.results.forEach((item) => {
            let card = recCard(item.backdrop_path, item.release_date, item.title, item.vote_average, item.id)
            constants.recommended.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }
}

// run search on enter
constants.search.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {

        searchButtonTrigger()
    }
})


// toggle menu by setting data-visible to true
constants.menuToggle.addEventListener('click', () => toggler())

// smallSearch toggle
constants.smallSearchBtn.addEventListener('click', () => seachInputToggle())

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