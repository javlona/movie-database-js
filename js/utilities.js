import {
    imgPath500,
    imgPath300,
    imgPath138,
    backdrop250
} from "./constants.js"
import * as constants from './constants.js'

// random number between two values
export function randomPage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// popular url of movies and tv shows
export let popularUrl = (type, api, page=1) => `https://api.themoviedb.org/3/${type}/popular?api_key=${api}&language=en-US&page=${page}`

// single movie url
export let singleMovieUrl = (api, id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`

// search movie url
export let searchMovieUrl = (type, api, key) => `https://api.themoviedb.org/3/search/${type}?api_key=${api}&language=en-US&query=${key}`

// movie credits url
export let creditsUrl = (id) => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${constants.API_KEY}&language=en-US`

// similar(recommendation) movies url
export let recommendationUrl = (id) => `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${constants.API_KEY}&language=en-US&page=1`

export let topRatedUrl = (type, api, page=1) => `https://api.themoviedb.org/3/${type}/top_rated?api_key=${api}&language=en-US&page=${page}`


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

    static add(key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    }

    static delete(key) {
        localStorage.removeItem(key)
    }
}


// movie card ui function
export const movieCard = (url, title, date, vote, id, type) => {
    return `<div onclick="goToInfo(${id})" class="${type}" id="card" data-id='${id}'>
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='images/no-image-150x225.png';">
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

// big cards for movies.html
//export const moviesBigCard = (url, title,)

// search result card ui 
export const searchCard = (url, title, date, overview, id, info) => {
    console.log(info, id);
    return `<div onclick="goToInfo(${id})" class="card-long">
                <div class="card-img">
                    <img src="${imgPath500+url}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='images/no-image-92x140.png';">
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
export function singleMovie(url, title, date, runtime, tagline, overview, genre, id, vote) {
    return `<div class="now-left">
                <img id="now-image" src="${imgPath300+url}" alt="${title}" onclick="goToInfo(${id})">
            </div>
            <div class="now-right">
                <h1 class="movie-title" id="now-title" onclick="goToInfo(${id})">${title}</h1>
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
                    <div class="single-movie-rating">
                        <div class="vote-rating rating-single">
                            <p>${voteCalc(vote)}<sup>%</sup></p>
                        </div>k
                        <div class="user-score">
                            <p>User</p>
                            <p>Score</p>
                        </div>
                    </div>
                    <button type="button" id="like-button" class="" onclick="like(event)">
                        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/></svg>
                    </button>
                    <div class="now-trailer">
                        <a><i class="fas fa-play"></i> Play Trailer</a>
                    </div>
                </div>
            </div>`
}

// movie credits cards ui
export function peopleCard(url, orgName, character) {
    return `<div class="card-people">
                <img src="${imgPath138+url}" alt="${orgName}" loading="lazy" onerror="this.onerror=null;this.src='images/no-image-140x177.png';">
                <div class="card-content">
                    <p class=name id=name>${orgName}</p>
                    <p class=cast-name id="castName">${character}</p>
                </div>
            </div>`
}


// recommended movies card
export function recCard(url, date, title, vote, id) {
    return `<div onclick="goToInfo(${id})" class="card-rec">
                <div class="image-content">
                    <img src="${backdrop250+url}" alt="${title}" loading="lazy">
                    <ul class="movie-meta">
                        <li id=year class=year><i class="far fa-calendar-alt"></i> ${date}</li>
                        <li id=like class=like>
                        </li>
                    </ul>
                </div>
                <div class="card-content">
                    <p class="title" id="title">${title}</p>
                    <p class="rec-rating" id="recRating">${voteCalc(vote)}%</p>
                </div>
            </div>`
}

// save seach value to LocalStorage and open new window
export function searchButtonTrigger() {
    if (constants.search.value === "") {
        alert("enter a word")
    } else {
        // save input value to localStorage
        Storage.add("searchWord", constants.search.value)

        // open new window
        window.open('/search.html', '_blank')

        //empty input field
        search.value = "";
    }
}

// vote calculator
function voteCalc(num) {
    return Math.round(num * 10)
}

// menu toggler
export let toggler = () => {
    const visible = constants.navLinks.getAttribute("data-visible")

    if (visible === "false") {
        constants.navLinks.setAttribute("data-visible", true)

    } else {
        constants.navLinks.setAttribute("data-visible", false)
    }
}

// search menu hide
export function seachInputToggle() {
    constants.smallSearch.classList.toggle('active')
    document.querySelector('input').focus()
}

// like button

//
export function goToInfo(id) {
    Storage.add("movie", id)
    window.open("/movie-info.html", "_self")
}