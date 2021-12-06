import { imgPath500 } from "./constants.js"

// export function randomPage(count) {
//     return Math.floor(Math.random() * count)
// }

export function randomPage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// single movie url
export let singleMovieUrl = (api, id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`

// search movie url
export let searchMovieUrl = (api, key) => `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${key}`


// card ui function
export const createCard = (url, title, date, vote) => {
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