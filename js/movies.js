import * as constants from './constants.js'
import {popularUrl, movieCard, goToInfo } from './utilities.js'

let page = 1;

// fetch popular into cards
async function fetchPopular() {

    try {
        let response = await fetch(popularUrl("movie",constants.API_KEY, page))
        let popularData = await response.json()

        popularData.results.forEach((item) => {

            let card = movieCard(item.poster_path, item.title, item.release_date, item.vote_average, item.id, "card-tall")
            constants.popularResults.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

window.addEventListener('load', () => {
    fetchPopular()
})

window.goToInfo = goToInfo  