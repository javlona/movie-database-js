import * as constants from './constants.js'
import {creditsUrl, recommendationUrl, recCard, Storage} from './utilities.js'


let movId;

// get movie id from local Storage
window.addEventListener('load', function(){
    //movId = Storage.get('movie')
    console.log(Storage.get('movie'))
    movId = localStorage.movie
    fetchRecommended()
    fetchCredits()
})


// fetch movie credits for a particular movie
async function fetchCredits() {

    try {
        let response = await fetch(creditsUrl(movId))
        let credits = await response.json()
        console.log(credits)
        
    } catch (error) {
        console.log(error)
    }

}


// fetch recommended movies
async function fetchRecommended() {

    try {
        let response = await fetch(recommendationUrl(movId))
        let recommended = await response.json()
        console.log(recommendationUrl(movId))
        recommended.results.forEach((item) => {
            let card = recCard(item.backdrop_path, item.release_date, item.title, item.vote_average)
            constants.recommended.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}