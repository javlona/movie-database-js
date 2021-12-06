import { imgPath500 } from "./constants.js"

// random number between two values
export function randomPage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// single movie url
export let singleMovieUrl = (api, id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`

// search movie url
export let searchMovieUrl = (api, key) => `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${key}`

// check if there is genre in movie details
export function genre(arr) {
    if(arr.length < 1) return ""
    else {
        return arr
            .map(item => item.name)
            .join(", ")
    } 
}

// card ui function
export const movieCard = (url, title, date, vote) => {
    return `<div class="card">
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="">
                    <div class="vote rating best">
                        <p>${vote*10}<sup>%</sup></p>
                    </div>
                </div>
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${date}</p>
                </div>
            </div>`
}  

//export const createPeopleCard = (url, orgName, character) = 

export const searchCard = (url, title, date, overview) => {
        return `<div class="card-long">
                    <div class="card-img">
                        <img src="${imgPath500+url}" alt="">
                    </div>
                    <div class="card-details">
                        <div class="title">
                            <a href="">${title}</a>
                            <p class="year">${date}</p>
                        </div>
                        <div class="overview">
                            <p class="overview-text">${overview}</p>
                        </div>
                    </div>
                </div>`
}