import { randomPage } from "./utilities.js"


// DOM elements
export const search = document.querySelector('#search')
export const searchBtn = document.querySelector('#searchBtn')
export const sliderPopular = document.querySelector('#popular')
export const sliderTrending = document.querySelector('#trending')
export const nowPlaying = document.querySelector('.now-playing .container')
export const nowImage = document.querySelector('#now-image')
export const nowTitle = document.querySelector('#now-title')
export const pg = document.querySelector('#pg')
export const nowRelYear = document.querySelector('#nowRelYear')
export const nowGenre = document.querySelector('#nowGenre')
export const nowDuration = document.querySelector('#nowDuration')
export const tagline = document.querySelector('#tagline')
export const overview = document.querySelector('#overview')

// get random number to randomize first 5 pages
export const FIRST_5_PAGES = 5; 

// there are 20 items in a page
export const TWENTY = 20; 

// random numbers for url
let random5 = randomPage(FIRST_5_PAGES)
export let random20 = randomPage(TWENTY)

// API url 
export const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
export const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${random5}`
export const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${random5}`
export const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
export const imgPath300 = 'https://image.tmdb.org/t/p/w300'
export const imgPath500 = 'https://image.tmdb.org/t/p/w500'
export const imgPathBig = 'https://image.tmdb.org/t/p/w1280'

