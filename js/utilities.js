import {imgPath500, imgPath300} from "./constants.js"
import * as constants from './constants.js'

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

// movie credits url
export let creditsUrl = (id) => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`


// check if there is genre in movie details
export function getGenre(arr) {
    if (arr.length < 1) return ""
    else {
        return arr
            .map(item => item.name)
            .join(", ")
    }
}

// localStorage shortcut function
export class Storage {
    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    static add(key, value){
        return localStorage.setItem(key, JSON.stringify(value))
    }

    static delete(key){
        localStorage.removeItem(key)
    }
}


// movie card ui function
export const movieCard = (url, title, date, vote) => {
    return `<div class="card">
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="${title}">
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

// search result card ui 
export const searchCard = (url, title, date, overview) => {
    return `<div class="card-long">
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="${title}">
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


// detailed single movie ui
export function singleMovie(url, title, date, runtime, tagline, overview, genre) {
    return `<div class="now-left">
                <img id="now-image" src="${imgPath300+url}" alt="${title}">
            </div>
            <div class="now-right">
                <h1 class="movie-title" id="now-title">${title}</h1>
                <div class="now-meta">
                    <p class="year" id="nowRelYear">${date}</p>
                    <p class="genre" id="nowGenre">${getGenre(genre)}</p>
                    <p class="duration" id="nowDuration">${runtime+'min'}</p>
                </div>
                <div class="overview">
                    <p class="slogan" id="tagline">${tagline}</p>
                    <h4>Overview</h4>
                    <p id="overview">${overview}</div>
                <div class="now-action">
                    <div class="like-button">
                        <input type="checkbox">
                    </div>
                    <div class="now-trailer">
                        <a><i class="fas fa-play"></i> Play Trailer</a>
                    </div>
                </div>
            </div>`
}



// menu toggler
export const toggler = () => {
    const visible = constants.navLinks.getAttribute("data-visible")

    if (visible === "false") {
        constants.navLinks.setAttribute("data-visible", true)

    } else {
        constants.navLinks.setAttribute("data-visible", false)
    }
}