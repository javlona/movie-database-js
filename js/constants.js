import {randomPage} from "./utilities.js"

// DOM elements
export const search = document.querySelector('#search')
export const searchBtn = document.querySelector('#searchBtn')
export const smallSearchBtn = document.querySelector('#smallSearchBtn')
export const smallSearch = document.querySelector('#smallSearch')
export const sliderPopular = document.querySelector('#popular')
export const sliderTrending = document.querySelector('#trending')
export const nowPlaying = document.querySelector('.now-playing .container')
export const nowImage = document.querySelector('#now-image')
export const nowTitle = document.querySelector('#now-title')
export const nowRelYear = document.querySelector('#nowRelYear')
export const nowGenre = document.querySelector('#nowGenre')
export const nowDuration = document.querySelector('#nowDuration')
export const tagline = document.querySelector('#tagline')
export const overview = document.querySelector('#overview')
export const searchResults = document.querySelector('#searchResults')
export const navLinks = document.querySelector('.links')
export const menuToggle = document.querySelector('#menu')
export const recommended = document.querySelector('#recommended')
export const sliderCast = document.querySelector('.cast .slider')
export const posterContainer = document.querySelector('#poster-container')
export const movieInfo = document.querySelector('.movie-info')
export const likeButton = document.querySelector('#like-button')
export const searchMoviesBtn = document.querySelector('#searchMoviesBtn')
export const searchShowsBtn = document.querySelector('#searchShowsBtn')
export const searchTopRatedBtn = document.querySelector('#searchTopRatedBtn')
export const popularResults = document.querySelector('#popularResults')
export const tvShowNav = document.querySelector('#tvShowNav')

// get random number to randomize first 5 pages
export const FIRST_5_PAGES = 5;

// there are 20 items in a page
export const NINETEEN = 19;

// random numbers for url
export let random5 = randomPage(1, FIRST_5_PAGES) // random pages from 1 to 5
export let random2 = randomPage(1, 2)
export let random20 = randomPage(0, NINETEEN) // random movie between 0 to 19

// API url 
export const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
export const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${random2}`
export const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

// image paths
export const imgPath138 = 'https://image.tmdb.org/t/p/w138_and_h175_face/'
export const imgPath300 = 'https://image.tmdb.org/t/p/w300'
export const imgPath500 = 'https://image.tmdb.org/t/p/w500'
export const imgPathBig = 'https://image.tmdb.org/t/p/w1280'
export const backdrop250 = 'https://image.tmdb.org/t/p/w250_and_h141_face/'
export const backdropBig = 'https://image.tmdb.org/t/p/w1000_and_h450_multi_faces'