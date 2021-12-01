// DOM elements
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')
const sliderPopular = document.querySelector('#popular')
const sliderTrending = document.querySelector('#trending')
const nowPlaying = document.querySelector('.now-playing .container')
const nowImage = document.querySelector('#now-image')
const nowTitle = document.querySelector('#now-title')
const pg = document.querySelector('#pg')
const nowRelYear = document.querySelector('#nowRelYear')
const genre = document.querySelector('#genre')
const nowDuration = document.querySelector('#nowDuration')
const tagline = document.querySelector('#tagline')
const overview = document.querySelector('#overview')

// get random number to randomize first 5 pages
const FIRST_5_PAGES = 5; 

// there are 20 items in a page
const TWENTY = 20; 

function randomPage(count) {
    return Math.floor(Math.random() * count + 1)
}

let random5 = randomPage(FIRST_5_PAGES)
let random20 = randomPage(TWENTY)


// API url 
const API_KEY = '5b1b515986ab2e1bc528fe6b762fd9a9'
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${random5}`
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${random5}`
const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
const imgPath = 'https://image.tmdb.org/t/p/w500'
const imgPathBig = 'https://image.tmdb.org/t/p/w1280'



// card ui function
const createCard = (url, title, date) => {
    return `<div class="card">
                <div class="card-img">
                    <img src="${imgPath+url}" alt="">
                </div>
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${date}</p>
                </div>
            </div>`
}  



// fetch popular into cards
async function fetchPopular() {

    try {
        let response = await fetch(popularUrl)
        let popularData = await response.json()

        popularData.results.forEach((item, index) => {
            //console.log(item, item.id)
            let card = createCard(item.poster_path, item.title, item.release_date)
            sliderPopular.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}

var randomMovID;

// fetch now playing random
async function fetchNowPlaying() {
    
    try {
        let response = await fetch(nowPlayingUrl)
        var nowPlayingData = await response.json()
        
        // fetch a random movie from now playing
        randomMovID = nowPlayingData.results[random20].id
        console.log(randomMovID)
        
    } catch (error) {
        console.log(error)
    }
    
    const movieUrl = `https://api.themoviedb.org/3/movie/${randomMovID}?api_key=${API_KEY}&language=en-US`
    
    try {
        let res = await fetch(movieUrl)
        let movData = await res.json()

        console.log(movData)
        nowImage.src = imgPath+movData.poster_path
        nowTitle.innerHTML = movData.title
        nowRelYear.innerHTML = movData.release_date
        nowDuration.innerHTML = movData.runtime + "min"
        nowGenre.innerHTML = `${movData.genres[0].name}, ${movData.genres[1].name}`
        tagline.innerHTML = movData.tagline
        overview.innerHTML = movData.overview
       
        nowPlaying.style.background = `
        linear-gradient(-45deg, rgb(188, 46, 46, 0.7), rgba(188, 46, 46, 0.9)),
        url(${imgPathBig}${movData.backdrop_path}) center center /cover;
        `
        console.log(imgPathBig + movData.backdrop_path)

    } catch (error) {
        console.log(error)
    }
    
}
  


// fetch detailed random movie info to DOM
async function fetchDetailedMovieToDOM() {

    

}


// fetch trending into cards
async function fetchTrending() {

    try {
        let response = await fetch(trendingUrl)
        let trendingData = await response.json()

        trendingData.results.forEach((item, index) => {
            let card = createCard(item.poster_path, item.title, item.release_date)
            sliderTrending.innerHTML += card
        })

    } catch (error) {
        console.log(error)
    }

}


// fetch search API
async function fetchSearchMovie() {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchWord}`

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

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (search.value === "") {
        alert("enter a word")
    } else {
        searchWord = search.value
        fetchSearchMovie()
        showSearched()
    }

    console.log(searchWord)
})

// load cards on DOM
this.addEventListener('load', () => {
    fetchNowPlaying()
    fetchPopular()
    fetchTrending()
    fetchDetailedMovieToDOM()
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


//dropdown menu for slider
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }