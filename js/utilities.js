import { imgPath500 } from "./constants.js"

export function randomPage(count) {
    return Math.floor(Math.random() * count + 1)
}


// single movie url
export let singleMovieUrl = (api, id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`

// search movie url
export let searchMovieUrl = (api, key) => `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${key}`


// card ui function
export const createCard = (url, title, date) => {
    return `<div class="card">
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="">
                </div>
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${date}</p>
                </div>
            </div>`
}  