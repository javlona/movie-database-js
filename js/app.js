import * as constants from './constants.js'
import { singleMovieUrl, searchMovieUrl, createCard } from "./utilities.js"


// fetch popular into cards
async function fetchPopular() {
    console.log(constants.popularUrl) 
    try {
        let response = await fetch(constants.popularUrl)
        let popularData = await response.json()

        popularData.results.forEach((item) => {
            // console.log(item, item.id)
            let card = createCard(item.poster_path, item.title, item.release_date)
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
        console.log(constants.random20)
        randomMovID = nowPlayingData.results[constants.random20].id
        console.log(randomMovID)
        
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
        constants.nowGenre.innerHTML = `${movData.genres[0].name}, ${movData.genres[1]?.name}`

    } catch (error) {
        console.log(error)
    }
    
}


// fetch trending into cards
async function fetchTrending() {

    try {
        let response = await fetch(constants.trendingUrl)
        let trendingData = await response.json()

        trendingData.results.forEach((item) => {
            let card = createCard(item.poster_path, item.title, item.release_date)
            constants.sliderTrending.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}


// fetch search API
async function fetchSearchMovie() {
    const searchUrl = searchMovieUrl(constants.API_KEY, searchWord)

    try {
        let response = await fetch(searchUrl)
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}


async function showSearched() {
    let response = await fetchSearchMovie()
    
    
    console.log(response)
}


let searchWord;

constants.searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (constants.search.value === "") {
        alert("enter a word")
    } else {

        searchWord = constants.search.value
        fetchSearchMovie()
        showSearched()
        //window.location.pathname = '/search.html'
    }

    console.log(window)
})

// load cards on DOM
window.addEventListener('load', () => {
    
    fetchNowPlaying()
    fetchPopular()
    fetchTrending()

})



// menu toggler
const navLinks = document.querySelector('.links')
const menuToggle = document.querySelector('#menu')

menuToggle.addEventListener('click', () => {
    const visible = navLinks.getAttribute("data-visible")

    if (visible === "false") {
        navLinks.setAttribute("data-visible", true)

        console.log(visible)
    } else {
        navLinks.setAttribute("data-visible", false)
    }
})