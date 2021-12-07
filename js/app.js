import * as constants from './constants.js'
import { singleMovieUrl, movieCard, genre, toggler } from "./utilities.js"


// fetch popular into cards
async function fetchPopular() {
    console.log(constants.popularUrl) 
    try {
        let response = await fetch(constants.popularUrl)
        let popularData = await response.json()
        console.log(popularData)
        popularData.results.forEach((item) => {
            // console.log(item, item.id)
            let card = movieCard(item.poster_path, item.title, item.release_date, item.vote_average)
            constants.sliderPopular.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

var randomMovID;

// fetch now playing random
async function fetchNowPlaying() {
    
    try {
        let response = await fetch(constants.nowPlayingUrl)
        var nowPlayingData = await response.json()
        
        // fetch a random movie from now playing
        randomMovID = nowPlayingData.results[constants.random20].id
        
    } catch (error) {
        console.log(error)
    }
    
    const movieUrl = singleMovieUrl(constants.API_KEY, randomMovID)
    
    try {
        let res = await fetch(movieUrl)
        let movData = await res.json()
        console.log(movData)
        constants.nowImage.src = constants.imgPath300+movData.poster_path
        constants.nowTitle.innerHTML = movData.title
        constants.nowRelYear.innerHTML = movData.release_date
        constants.nowDuration.innerHTML = movData.runtime + "min"
        constants.tagline.innerHTML = movData.tagline
        constants.overview.innerHTML = movData.overview
        
        constants.nowPlaying.style = `
        background: linear-gradient(-45deg, rgb(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
        url(${constants.imgPathBig}${movData.backdrop_path}) center center /cover;
        `
        constants.nowGenre.innerHTML = genre(movData.genres)

    } catch (error) {
        console.log(error)
    }
    
}


// fetch trending into cards
async function fetchTrending() {

    try {
        let response = await fetch(constants.trendingUrl)
        let trendingData = await response.json()
        console.log(trendingData)
        trendingData.results.forEach((item) => {
            let card = movieCard(item.poster_path, item.title, item.release_date, item.vote_average)
            constants.sliderTrending.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}


constants.searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (constants.search.value === "") {
        alert("enter a word")
    } else {
        // save input value to localStorage
        localStorage.setItem("searchWord", constants.search.value)

        // open new window
        window.open('/search.html', '_blank')
    }

})

// load cards on DOM
window.addEventListener('load', () => {
    
    fetchNowPlaying()
    fetchPopular()
    fetchTrending()

})


// toggle menu by setting data-visible to true
constants.menuToggle.addEventListener('click', () => toggler())

